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

## Deploy (Netlify)

`netlify.toml` is set: build command `npm run build`, publish directory `dist`, Node 22. Connect the GitHub repo to Netlify, point `mollybb.com` at it, and every `git push` redeploys.

The contact link currently points to `hello@mollybb.com`. Update it in `index.astro` (and the footer if needed) once the real address exists.

## Style note

Andrew avoids em dashes in copy. Use commas, parentheses, or restructure.
