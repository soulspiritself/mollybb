# Molly BB

A creative portfolio site built in Astro. Gold-on-black, elegant, minimal. Same setup as soulspiritself.com (Astro static site, deployed on Netlify).

## Running locally

```
cd ~/Documents/mollybb
npm install      # first time only
npm run dev      # http://localhost:4321
npm run build    # produces /dist
npm run preview  # serves the built site
```

## Structure

```
src/
├── layouts/BaseLayout.astro   ← head, fonts, Nav + Footer, reveal-on-scroll script
├── components/Nav.astro        ← sticky top nav
├── components/Footer.astro
├── pages/
│   ├── index.astro             ← the whole site: hero, work, about, contact (single page)
│   └── 404.astro
└── styles/global.css           ← brand tokens + layout helpers (single source of truth)
public/
├── images/mollybb-logo.png     ← MOLLY BB wordmark (also the og + apple-touch image)
├── images/mollybb-nib.png      ← spare gold nib logo, unused for now
└── favicon.svg                 ← gold "M" mark
```

## Brand tokens (in `src/styles/global.css`)

| Token | Value | Use |
|---|---|---|
| `--black` | `#0a0a0b` | page background |
| `--gold` | `#c9a96e` | primary accent |
| `--gold-bright` | `#e8cf9a` | highlight / hover |
| `--text` | `#f3efe6` | warm off-white type |
| `--serif` | Cormorant Garamond | display |
| `--sans` | Inter | UI / body |

Fonts load from Google Fonts (no local font files).

## Adding real work later

The Work section in `index.astro` is three placeholder cards (Words / Image / Ideas), each marked "Coming soon". When there's real work, replace a card's body with links, or split each into its own page under `src/pages/`.

## /study (unlisted)

`mollybb.com/study` is Molly's two-year A level and maths study plan. It is unlisted: `noindex` meta, an `X-Robots-Tag` header in `netlify.toml`, excluded from the sitemap in `astro.config.mjs`, and not in the main nav. Anyone with the link can read it.

```
src/layouts/StudyLayout.astro        ← study sub-nav + shared study styles
src/components/study/                ← StudyNav, Section, Table, Milestones, Bios, ThisWeek
src/data/study/                      ← ALL the content lives here, edit these:
  calendar.ts   63 weeks (week 1 = Mon 5 Oct 2026), holidays, term dates, timetable
  classics.ts   H408 exam, topics, term tables, milestones, levels
  history.ts    H407 the same
  rs.ts         H573 papers, topic intros, milestones, levels
  maths.ts      FS L2 boards, session, modules, 31-week table, teaching scripts
  people.ts     who's-who bios, tagged by topic
  resources.ts  official links, texts, textbooks (ISBNs), maths links, apps
src/pages/study/                     ← index, calendar, classics, history, rs, maths, people, resources
```

### /study/today (the command centre)

`src/pages/study/today.astro` is a daily planner. `src/data/study/planner.ts` generates each day's tasks in the browser from the week tables (calendar, subject term tables, RS essays, maths weeks) and attaches "where to find it" resources per term. It also builds `TESTS`, the list of every milestone, mock and maths check with a date.

Ticks, marks and action points are stored as `{ [id]: { d, at, s, n } }`:
- locally in `localStorage` (`study.progress.v1`), always;
- and, once a device has entered the family PIN, in Netlify Blobs through `netlify/functions/progress.mts` (`GET`/`PUT /api/progress`, `Authorization: Bearer <PIN>`). Merge is last-write-wins per task.

The PIN is the Netlify env var `STUDY_PIN` (`netlify env:get STUDY_PIN` to read it, `netlify env:set STUDY_PIN NEWVALUE` then redeploy to change it). Anyone with the link plus the PIN can read and write ticks; there is nothing else in the store.

Task ids are `YYYY-MM-DD:slot` (slots: maths, cc-am, cc-pm, ah-am, ah-pm, rs-am, rs-pm, friday, read) and `test:<subject>-<code>` for tests, so re-generating the plan keeps existing ticks as long as dates and codes do not change.

Local testing with the function: `netlify dev --port 8888` (uses a local Blobs sandbox, not production data).

The "This week" banner and the highlighted calendar row are computed in the browser from today's date and `calendar.ts`, so nothing needs updating week to week. To change what a week says, edit that week's row in `calendar.ts` and redeploy. The source markdown the plan was written from is in `~/Documents/Claude/study-plan-2026-28/`.

## Deploy (Netlify)

The site is deployed from the CLI, not from GitHub pushes (the Netlify project is not git-linked). After `git push`:

```
npm run build
netlify deploy --prod --dir=dist
```

Original notes:

`netlify.toml` is set: build command `npm run build`, publish directory `dist`, Node 22. Connect the GitHub repo to Netlify, point `mollybb.com` at it, and every `git push` redeploys.

The contact link currently points to `hello@mollybb.com`. Update it in `index.astro` (and the footer if needed) once the real address exists.

## Style note

Andrew avoids em dashes in copy. Use commas, parentheses, or restructure.
