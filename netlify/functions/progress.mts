import { getStore } from '@netlify/blobs';
import type { Config } from '@netlify/functions';

/**
 * Shared progress store for /study/today.
 * State shape: { [taskId]: { d: 0|1, at: number, s?: string, n?: string } }
 * Merge rule: per key, the entry with the later `at` wins.
 * Guarded by a family PIN (env STUDY_PIN) sent as "Authorization: Bearer <pin>".
 */
type Entry = { d: number; at: number; s?: string; n?: string };
type State = Record<string, Entry>;

const merge = (a: State, b: State): State => {
  const out: State = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (!v || typeof v.at !== 'number') continue;
    if (!out[k] || v.at >= out[k].at) out[k] = v;
  }
  return out;
};

export default async (req: Request) => {
  const pin = process.env.STUDY_PIN;
  const auth = req.headers.get('authorization') || '';
  if (!pin || auth !== `Bearer ${pin}`) {
    return new Response(JSON.stringify({ error: 'unauthorized' }), { status: 401, headers: { 'content-type': 'application/json' } });
  }
  const store = getStore({ name: 'study-progress', consistency: 'strong' });
  const current = ((await store.get('state', { type: 'json' })) as State | null) || {};

  if (req.method === 'GET') {
    return Response.json(current);
  }
  if (req.method === 'PUT') {
    let incoming: State = {};
    try { incoming = (await req.json()) as State; } catch { return new Response('bad json', { status: 400 }); }
    if (typeof incoming !== 'object' || Array.isArray(incoming)) return new Response('bad state', { status: 400 });
    if (Object.keys(incoming).length > 5000) return new Response('too large', { status: 413 });
    const merged = merge(current, incoming);
    await store.setJSON('state', merged);
    return Response.json(merged);
  }
  return new Response('method not allowed', { status: 405 });
};

export const config: Config = { path: '/api/progress' };
