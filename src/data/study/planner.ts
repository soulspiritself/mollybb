/**
 * Daily planner generator. Turns the week-level plan (calendar + subject tables)
 * into a list of tasks for any given date, each with where to find the resource.
 * Used at build time (for the tests list) and in the browser (for the day view).
 */
import { WEEKS, BREAKS } from './calendar';
import type { Week } from './types';
import * as CC from './classics';
import * as AH from './history';
import * as RS from './rs';
import { WEEKS as MW } from './maths';
import { lessonsForWeek, lessonUrl } from './lessons';

export type Res = { label: string; kind: 'book' | 'online' | 'notes'; url?: string; note?: string };
export type Subject = 'Maths' | 'Classical Civ' | 'Ancient History' | 'Religious Studies' | 'Reading' | 'Assessment' | 'Review';
export interface Task {
  id: string;
  time: string;
  subject: Subject;
  title: string;
  detail?: string;
  res: Res[];
  test?: boolean;      // has a score box
  code?: string;       // M1, Mock, etc
}
export interface DayPlan {
  date: string;
  kind: 'school' | 'weekend' | 'break' | 'before' | 'after';
  weekday: number;     // 0 = Monday
  week?: Week;
  breakLabel?: string;
  breakNote?: string;
  tasks: Task[];
}
export interface TestItem {
  id: string;
  subject: Subject;
  code: string;
  week: number;
  day: number;         // 0 = Monday
  date: string;
  title: string;
  format: string;
  note?: string;
}

// ---------- helpers ----------
export const strip = (s: string) => s.replace(/<[^>]+>/g, '');
const pad = (n: number) => String(n).padStart(2, '0');
export const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const fromIso = (s: string) => new Date(s + 'T00:00:00');
export const addDays = (s: string, n: number) => { const d = fromIso(s); d.setDate(d.getDate() + n); return iso(d); };
const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const dayName = (i: number) => DAYS[i];

export const weekFor = (date: string): Week | undefined =>
  WEEKS.find((w) => date >= w.mon && date <= addDays(w.mon, 6));
export const breakFor = (date: string) => BREAKS.find((b) => date >= b.from && date <= b.to);
export const weekdayIndex = (date: string) => (fromIso(date).getDay() + 6) % 7; // Mon = 0

// Rows keyed by teaching week, from the subject tables. A first cell like "33 to 34" spans weeks.
type Cells = string[];
const rowsByWeek = (tables: { rows: any[] }[]) => {
  const m = new Map<number, Cells>();
  for (const t of tables) for (const r of t.rows) {
    if (!r || Array.isArray(r) || !r.week) continue;
    const cells: Cells = r.cells.map(strip);
    const span = cells[0].match(/^(\d+) to (\d+)$/);
    const from = r.week as number; const to = span ? Number(span[2]) : from;
    for (let w = from; w <= to; w++) m.set(w, cells);
  }
  return m;
};
const ccWeeks = rowsByWeek([CC.T1, CC.T2, CC.T3, CC.T4]);       // [n, read, practice]
const ahWeeks = rowsByWeek([AH.T1, AH.T2, AH.T3, AH.T4, AH.T5]); // [n, content, practice]
const mathsWeeks = rowsByWeek([MW]);                              // [n, date, sessions, friday]
const rsWeeks = (() => {
  const m = new Map<number, typeof RS.ESSAYS>();
  for (const e of RS.ESSAYS) {
    const span = e.weeks.match(/^(\d+)(?: to (\d+))?$/); if (!span) continue;
    const from = Number(span[1]), to = span[2] ? Number(span[2]) : from;
    for (let w = from; w <= to; w++) m.set(w, [...(m.get(w) || []), e]);
  }
  return m;
})();

// ---------- resources ----------
const OCR = {
  cc: 'https://www.ocr.org.uk/qualifications/as-and-a-level/classical-civilisation-h008-h408-from-2017/',
  ah: 'https://www.ocr.org.uk/qualifications/as-and-a-level/ancient-history-h007-h407-from-2017/',
  rs: 'https://www.ocr.org.uk/qualifications/as-and-a-level/religious-studies-h173-h573-from-2016/',
};
const R = {
  odyssey: [
    { label: 'Homer, The Odyssey, trans. Rieu (Penguin Classics)', kind: 'book' } as Res,
    { label: 'Odyssey, trans. Kline, free online', kind: 'online', url: 'https://www.poetryintranslation.com/PITBR/Greek/Odhome.php' } as Res,
    { label: 'Bloomsbury World of the Hero (Knights): the Odyssey chapters', kind: 'book' } as Res,
  ],
  aeneid: [
    { label: 'Virgil, The Aeneid, trans. West (Penguin Classics)', kind: 'book' } as Res,
    { label: 'Aeneid, trans. Kline, free online', kind: 'online', url: 'https://www.poetryintranslation.com/PITBR/Latin/Virgilhome.php' } as Res,
    { label: 'Bloomsbury World of the Hero (Knights): the Aeneid chapters', kind: 'book' } as Res,
  ],
  democracy: [
    { label: 'OCR literary-sources booklet for Democracy and the Athenians (free PDF on the H408 page)', kind: 'online', url: OCR.cc } as Res,
    { label: 'Bloomsbury Components 31 and 34: the Democracy chapters', kind: 'book' } as Res,
  ],
  imperial: [
    { label: 'OCR literary-sources booklet for Imperial Image (free PDF on the H408 page)', kind: 'online', url: OCR.cc } as Res,
    { label: 'Bloomsbury Components 21 and 22: the Imperial Image chapters', kind: 'book' } as Res,
    { label: 'Visual sources: search the British Museum and Museo dell’Ara Pacis sites by name', kind: 'online', url: 'https://www.britishmuseum.org/collection' } as Res,
  ],
  ccPapers: [{ label: 'OCR H408 past papers, mark schemes, examiners’ reports', kind: 'online', url: OCR.cc } as Res],
  greek: [
    { label: 'Herodotus, The Histories (Penguin Classics)', kind: 'book' } as Res,
    { label: 'Thucydides, History of the Peloponnesian War (Penguin Classics)', kind: 'book' } as Res,
    { label: 'LACTOR 1 The Athenian Empire', kind: 'book', url: 'https://lactor.kcl.ac.uk/' } as Res,
    { label: 'Bloomsbury Ancient History Component 1: Greece (period study chapters)', kind: 'book' } as Res,
    { label: 'Free texts with chapter numbers: Perseus', kind: 'online', url: 'https://www.perseus.tufts.edu/' } as Res,
  ],
  xen: [{ label: 'Xenophon, A History of My Times (Penguin Classics), 1.4 to 2.1', kind: 'book' } as Res],
  athens: [
    { label: 'LACTOR 2 The Old Oligarch; LACTOR 12 The Culture of Athens', kind: 'book', url: 'https://lactor.kcl.ac.uk/' } as Res,
    { label: 'OCR H407 source booklet (Plutarch, Aristophanes extracts), free on the H407 page', kind: 'online', url: OCR.ah } as Res,
    { label: 'Bloomsbury Ancient History Component 1: Greece (Athens depth-study chapters)', kind: 'book' } as Res,
    { label: 'Plato Apology and Republic, Aristotle Athenian Constitution: Perseus', kind: 'online', url: 'https://www.perseus.tufts.edu/' } as Res,
  ],
  republic: [
    { label: 'Cicero, Selected Letters (Penguin Classics)', kind: 'book' } as Res,
    { label: 'LACTOR 3 and LACTOR 7 Late Republican Rome', kind: 'book', url: 'https://lactor.kcl.ac.uk/' } as Res,
    { label: 'OCR H407 source booklet (Appian, Sallust, Plutarch, Suetonius extracts), free on the H407 page', kind: 'online', url: OCR.ah } as Res,
    { label: 'Bloomsbury Ancient History Component 2: Rome (Late Republic chapters)', kind: 'book' } as Res,
  ],
  jc: [
    { label: 'Suetonius, The Twelve Caesars (Penguin); Tacitus, The Annals (Penguin)', kind: 'book' } as Res,
    { label: 'LACTOR 15, 17 and 19', kind: 'book', url: 'https://lactor.kcl.ac.uk/' } as Res,
    { label: 'Bloomsbury Ancient History Component 2: Rome (Julio-Claudian chapters)', kind: 'book' } as Res,
  ],
  ahPapers: [{ label: 'OCR H407 past papers, mark schemes, examiners’ reports', kind: 'online', url: OCR.ah } as Res],
  rsPhil: [{ label: 'Hodder A Level RS: Philosophy of Religion (Waterfield, Eyre, Dean)', kind: 'book' } as Res],
  rsEth: [{ label: 'Hodder A Level RS: Religion and Ethics', kind: 'book' } as Res],
  rsChr: [{ label: 'Hodder A Level RS: Developments in Christian Thought', kind: 'book' } as Res],
  rsCommon: [
    { label: 'Baron, Model Essays for OCR H573 (read after writing, never before)', kind: 'book' } as Res,
    { label: 'OCR H573 past papers and mark schemes', kind: 'online', url: OCR.rs } as Res,
  ],
  maths: [
    { label: 'CGP Functional Skills Maths Level 2: the page for this topic', kind: 'book' } as Res,
    { label: 'Pearson Functional Skills past papers (for the two exam questions)', kind: 'online', url: 'https://qualifications.pearson.com/en/support/support-topics/exams/past-papers.html?Qualification-Family=functional-skills&Qualification-Subject=Mathematics' } as Res,
    { label: 'Skills Workshop worksheets by Level 2 statement', kind: 'online', url: 'https://www.skillsworkshop.org/maths' } as Res,
  ],
  mathsMock: [
    { label: 'Open Awards Level 2 sample assessment', kind: 'online', url: 'https://openawards.org.uk/functional-skills/' } as Res,
    { label: 'Pass Functional Skills past-paper hub (all boards)', kind: 'online', url: 'https://passfunctionalskills.co.uk/functional-skills-maths-level-2-past-papers/' } as Res,
  ],
  notes: (what: string) => ({ label: what, kind: 'notes' } as Res),
};

const ccRes = (w: number): Res[] => w <= 10 ? R.odyssey : w <= 21 ? R.aeneid : w <= 34 ? R.democracy : w <= 48 ? R.imperial : [...R.odyssey.slice(0, 1), ...R.aeneid.slice(0, 1), ...R.ccPapers];
const ahRes = (w: number): Res[] => w <= 16 ? R.greek : w <= 21 ? [...R.xen, ...R.greek] : w <= 34 ? R.athens : w <= 48 ? R.republic : w <= 59 ? R.jc : R.ahPapers;
const rsRes = (topic: string): Res[] => [
  ...(topic.startsWith('Phil') ? R.rsPhil : topic.startsWith('Ethics') ? R.rsEth : topic.startsWith('Christian') ? R.rsChr : []),
  ...R.rsCommon,
];

// ---------- tests ----------
// Which weekday a subject's milestone falls on. Term-test weeks (10, 21) spread Mon to Thu.
const testDay = (subject: Subject, week: number): number => {
  if (week === 10 || week === 21) return subject === 'Classical Civ' ? 0 : subject === 'Ancient History' ? 1 : subject === 'Religious Studies' ? 2 : 4;
  if (week === 33) return subject === 'Ancient History' ? 0 : 2;
  return 4;
};

export const TESTS: TestItem[] = (() => {
  const out: TestItem[] = [];
  const add = (subject: Subject, code: string, week: number, day: number, title: string, format: string, note?: string) => {
    const w = WEEKS.find((x) => x.n === week); if (!w) return;
    const key = `${subject.toLowerCase().replace(/[^a-z]+/g, '-')}-${code.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    out.push({ id: `test:${key}`, subject, code, week, day, date: addDays(w.mon, day), title, format, note });
  };
  for (const m of CC.MILESTONES) add('Classical Civ', m.code, m.week, testDay('Classical Civ', m.week), m.question, m.format, m.note);
  for (const m of AH.MILESTONES) add('Ancient History', m.code, m.week, testDay('Ancient History', m.week), m.question, m.format, m.note);
  for (const m of RS.MILESTONES) add('Religious Studies', m.code, m.week, testDay('Religious Studies', m.week), m.question, m.format, m.note);
  // Maths
  add('Maths', 'Diagnostic', 1, 3, 'Diagnostic: a Level 1 sample paper, Section B, untimed, with the calculator', 'Untimed', 'Chosen so it ends in success. Note the three weakest areas; no judgement.');
  add('Maths', 'Phase 1 review', 10, 4, 'Phase 1 review: 8 mixed questions on number and money', '25 min timed', 'Under 50% means weeks 11 and 12 repeat fractions and percentages.');
  add('Maths', 'Section A', 21, 4, 'Section A of a past paper, no calculator', 'Timed');
  add('Maths', 'Mock 1', 27, 3, 'Mock 1: full paper split across the week; marked Thursday', 'Full paper', 'The booking gate: 55% or more books the exam for w/c 21 June.');
  add('Maths', 'Mock 2', 29, 0, 'Mock 2: full paper in one sitting under exam conditions', '1h 55m');
  add('Maths', 'Mock 3', 30, 0, 'Mock 3: full paper in one sitting', '1h 55m');
  add('Maths', 'Exam', 31, 0, 'Functional Skills Maths Level 2 exam (booked date this week)', 'Section A 25 to 30 min, Section B 1h 20m to 1h 30m');
  // Mock series
  const mocks49: [Subject, number, string, string][] = [
    ['Classical Civ', 0, 'Mock: H408/11 The World of the Hero', '2h 30m'],
    ['Religious Studies', 1, 'Mock: H573/01 Philosophy of Religion', '2h'],
    ['Ancient History', 2, 'Mock: H407/12 Athens and the Greek World', '2h 30m'],
    ['Classical Civ', 3, 'Mock: H408/34 Democracy and the Athenians', '1h 45m'],
  ];
  const mocks50: [Subject, number, string, string][] = [
    ['Religious Studies', 0, 'Mock: H573/02 Religion and Ethics', '2h'],
    ['Ancient History', 1, 'Mock: H407/21 Section B only (Late Republic)', '1h 15m'],
    ['Classical Civ', 2, 'Mock: H408/22 Imperial Image', '1h 45m'],
    ['Religious Studies', 3, 'Mock: H573/03 Christian Thought, half paper', '1h 20m'],
  ];
  mocks49.forEach(([s, d, t, f], i) => add(s, `Jan mock ${i + 1}`, 49, d, t, f));
  mocks50.forEach(([s, d, t, f], i) => add(s, `Jan mock ${i + 5}`, 50, d, t, f));
  const mocks62: [Subject, number, string, string][] = [
    ['Classical Civ', 0, 'Second mock: H408/11 The World of the Hero', '2h 30m'],
    ['Ancient History', 1, 'Second mock: H407/12 Athens and the Greek World', '2h 30m'],
    ['Religious Studies', 2, 'Second mock: H573/01 Philosophy of Religion', '2h'],
    ['Classical Civ', 3, 'Second mock: H408/22 and H408/34, both option papers', '2 x 1h 45m'],
    ['Ancient History', 4, 'Second mock: H407/21 Republic and Empire', '2h 30m'],
  ];
  mocks62.forEach(([s, d, t, f], i) => add(s, `Apr mock ${i + 1}`, 62, d, t, f));
  add('Religious Studies', 'Apr mock 6', 63, 0, 'Second mock: H573/02 Ethics and H573/03 Christian Thought', '2 x 2h');
  return out.sort((a, b) => a.date.localeCompare(b.date));
})();

// ---------- the day ----------
const fridaySubject = (friday?: string): Subject | undefined =>
  !friday ? undefined : friday.startsWith('CC') ? 'Classical Civ' : friday.startsWith('AH') ? 'Ancient History' : friday.startsWith('RS') ? 'Religious Studies' : undefined;

export function buildDay(date: string): DayPlan {
  const wd = weekdayIndex(date);
  const brk = breakFor(date);
  if (brk) return { date, kind: 'break', weekday: wd, breakLabel: brk.label, breakNote: brk.note, tasks: [] };
  const week = weekFor(date);
  if (!week) return { date, kind: date < WEEKS[0].mon ? 'before' : 'after', weekday: wd, tasks: [] };
  if (wd >= 5) return { date, kind: 'weekend', weekday: wd, week, tasks: [] };

  const n = week.n;
  const t: Task[] = [];
  const id = (slot: string) => `${date}:${slot}`;
  const testsToday = TESTS.filter((x) => x.date === date);

  // Maths, 9:00
  const mw = mathsWeeks.get(n);
  const lessonRes: Res[] = lessonsForWeek(n).map((l) => ({ label: `Lesson page: ${l.title}`, kind: 'online', url: lessonUrl(l), note: 'the picture, the steps, worked examples, practice, video' }));
  if (mw) {
    const isFri = wd === 4;
    const mt = testsToday.find((x) => x.subject === 'Maths');
    if (mt) {
      t.push({ id: mt.id, time: '9:00', subject: 'Maths', title: mt.title, detail: [mt.format, mt.note].filter(Boolean).join('. '), res: [...lessonRes, ...(/mock|exam|section a/i.test(mt.code) ? R.mathsMock : R.maths)], test: true, code: mt.code });
    } else if (isFri) {
      t.push({ id: id('maths'), time: '9:00', subject: 'Maths', title: `Friday check${mw[3] ? `: ${mw[3]}` : ''}`, detail: 'Five questions from this week’s topic plus three re-dos from the error log. Scored out of 8. Under 5 means Monday repeats the weakest topic.', res: [...lessonRes, ...R.maths], test: true, code: 'Friday check' });
    } else {
      t.push({ id: id('maths'), time: '9:00', subject: 'Maths', title: `Maths session, 30 minutes${wd === 0 ? ' (Monday: ten-minute review deck first)' : ''}`, detail: mw[2], res: [...lessonRes, ...R.maths] });
    }
  } else if (week.maths) {
    t.push({ id: id('maths'), time: '9:00', subject: 'Maths', title: week.maths, res: R.mathsMock });
  }

  // Morning and afternoon blocks by weekday
  const cc = ccWeeks.get(n);
  const ah = ahWeeks.get(n);
  const rsList = rsWeeks.get(n) || [];
  const ccRead = cc ? cc[1] : week.cc;
  const ccPractice = cc ? cc[2] : '';
  const ahContent = ah ? ah[1] : week.ah;
  const ahPractice = ah ? ah[2] : '';
  const rsReview = /^(review|january mocks|end-of-year)/i.test(rsList[0]?.topic || '');
  const rsTopic = rsReview ? '' : (rsList[0]?.topic || '');
  const rsEssay = rsReview ? '' : (rsList[0]?.essay || '');
  const rsNext = rsReview ? undefined : rsList[1];

  // Non-maths tests scheduled today. Mon to Thu they take the subject's block; Friday is handled in its own branch.
  const otherTests = testsToday.filter((x) => x.subject !== 'Maths');
  const hasTest = (s: Subject) => otherTests.some((x) => x.subject === s);
  const paperRes = (s: Subject) => s === 'Classical Civ' ? R.ccPapers : s === 'Ancient History' ? R.ahPapers : R.rsCommon;
  const pushTest = (x: TestItem, time: string) => t.push({ id: x.id, time, subject: 'Assessment', title: `${x.code}: ${x.title}`, detail: [x.format, x.note].filter(Boolean).join('. '), res: paperRes(x.subject), test: true, code: x.code });
  if (wd < 4) for (const x of otherTests) pushTest(x, '9:45 to 12:00');

  const ccTask = (slot: string, time: string, title: string, detail: string) => { if (wd < 4 && hasTest('Classical Civ')) return; t.push({ id: id(slot), time, subject: 'Classical Civ', title, detail, res: ccRes(n) }); };
  const ahTask = (slot: string, time: string, title: string, detail: string) => { if (wd < 4 && hasTest('Ancient History')) return; t.push({ id: id(slot), time, subject: 'Ancient History', title, detail, res: ahRes(n) }); };
  const rsTask = (slot: string, time: string, title: string, detail: string, topic = rsTopic) => { if (wd < 4 && hasTest('Religious Studies')) return; t.push({ id: id(slot), time, subject: 'Religious Studies', title, detail, res: rsRes(topic) }); };

  const ccIsOption = n >= 22;
  const ccReadTitle = ccIsOption ? 'Classical Civ: this week’s sources' : 'Classical Civ: first read';
  const ccSecondTitle = ccIsOption ? 'Classical Civ: source sheets and textbook' : 'Classical Civ: second read with the book sheet, then the textbook chapter';

  switch (wd) {
    case 0: // Monday
      ccTask('cc-am', '9:45 to 12:00', ccReadTitle, `${ccRead}${ccIsOption ? ' Read the prescribed passages once for sense, then start a source sheet for each.' : ' Read once for the story, no notes, then start the book sheet: what happens; who speaks; three quotable moments; themes; one link.'}`);
      ahTask('ah-pm', '13:00 to 15:00', 'Ancient History: the sources', `${ahContent} Read the prescribed passages and add a line to the source log for each: passage, event, claim, reason to trust or doubt, essay themes.`);
      break;
    case 1: // Tuesday
      if (rsTopic) rsTask('rs-am', '9:45 to 12:00', `Religious Studies: read the chapter for ${rsTopic}`, `Hodder chapter in the reading slot; make a two-page summary in your own words. Then start the topic sheet: ideas left, criticisms and replies middle, scholars right.${rsNext ? ` (Also this week: ${rsNext.topic}.)` : ''}`);
      else rsTask('rs-am', '9:45 to 12:00', 'Religious Studies: review', `${week.rs} Re-read the topic sheets covered so far; plan two essays from past papers in ten bullets each.`);
      ccTask('cc-pm', '13:00 to 15:00', ccSecondTitle, ccIsOption ? `${ccRead} Finish the source sheets, then the textbook chapter on this material, adding to the sheets in a second colour.` : `${ccRead} Close read, fill the book sheet, then the textbook chapter in a second colour.`);
      break;
    case 2: // Wednesday
      ahTask('ah-am', '9:45 to 12:00', 'Ancient History: textbook and source cards', `${ahContent} Textbook chapter for this material; update the source cards for any author met this week (who, when, what they could know, what they wanted, biases).`);
      if (rsTopic) rsTask('rs-pm', '13:00 to 15:00', `Religious Studies: topic sheet and for-and-against for ${rsTopic}`, 'Finish the one-page topic sheet. Build the for-and-against table for the two or three obvious questions: three arguments each way and a judgement.');
      else rsTask('rs-pm', '13:00 to 15:00', 'Religious Studies: review', `${week.rs} Work through the links page and the scholars on each topic sheet; one timed essay plan.`);
      break;
    case 3: // Thursday
      ccTask('cc-am', '9:45 to 12:00', 'Classical Civ: practice', `${ccPractice || week.cc} Eight minutes for a paragraph: point, evidence (two quotations), explanation, link back to the question. Longer pieces get the time on the plan.`);
      ahTask('ah-pm', '13:00 to 15:00', 'Ancient History: practice', `${ahPractice || week.ah} Every source used gets the three-part sentence: claim, reliability, judgement.`);
      break;
    case 4: { // Friday
      const fs = fridaySubject(week.friday);
      const already = otherTests;
      for (const x of already) pushTest(x, x.subject === fs || already.length === 1 ? '9:45 to 12:00' : '13:00 to 15:00');
      if (week.friday && !already.some((x) => x.subject === fs)) {
        t.push({ id: id('friday'), time: '9:45 to 12:00', subject: 'Assessment', title: `Timed piece: ${week.friday}`, detail: 'Exam conditions. Marked the same day with the OCR mark scheme and the level table on the subject page. One action point goes in the tracker.', res: fs === 'Classical Civ' ? R.ccPapers : fs === 'Ancient History' ? R.ahPapers : R.rsCommon, test: true, code: 'Friday piece' });
      } else if (!week.friday && already.length === 0 && week.label) {
        t.push({ id: id('friday'), time: '9:45 to 12:00', subject: 'Assessment', title: week.label, detail: week.event || '', res: [] });
      }
      if (fs === 'Religious Studies' || already.some((x) => x.subject === 'Religious Studies')) {
        rsTask('rs-pm', '13:00 to 15:00', 'Religious Studies: mark and review', 'Mark this morning’s essay with the six-level grid, AO1 and AO2 separately. Read a model essay on a neighbouring question and note two things it did that yours did not.');
      } else if (rsEssay) {
        rsTask('rs-pm', '13:00 to 15:00', 'Religious Studies: write the essay', `${rsEssay} Forty minutes, timed, the whole essay. Mark it today. Then a model essay, and two things it did that yours did not.`);
      } else {
        rsTask('rs-pm', '13:00 to 15:00', 'Religious Studies: short block', week.rs);
      }
      break;
    }
  }

  // Reading slot, 15:00, every day
  t.push({ id: id('read'), time: '15:00 to 15:45', subject: 'Reading', title: wd === 4 ? 'Weekly review' : 'Set-text reading', detail: wd === 4 ? `Error log, review deck and cards, plan next week.${n % 2 === 0 ? ' Retrieval quiz: ten cards per subject, five minutes each, scores logged.' : ''}` : (n <= 21 ? `Keep going with the set text: ${ccRead}` : `Set texts only: the Classical Civ sources this week, or the Ancient History passages if those are done.`), res: [] , test: wd === 4 && n % 2 === 0, code: wd === 4 && n % 2 === 0 ? 'Quiz' : undefined });

  return { date, kind: 'school', weekday: wd, week, tasks: t };
}
