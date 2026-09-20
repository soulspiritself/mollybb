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
