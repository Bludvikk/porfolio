# Giuseppe Damasin — Portfolio

Live: https://bludvikk.github.io/porfolio/

Static single-page portfolio built with [Astro](https://astro.build) (zero JavaScript shipped).

## Layout
- `source/` — the Astro project
  - `src/data/profile.ts` — **all content** (roles, stack, figures, links, section toggles). Edit this to update the site.
  - `src/styles/global.css` — design tokens and styles (v3 Cyberpunk handoff)
  - `src/pages/index.astro` — markup
  - `public/` — résumé PDF, favicon, OG image
- Repo root (`index.html`, `_astro/`, …) — the built site that GitHub Pages serves from `main` / root.

## Update the site
```bash
cd source
npm install
npm run dev       # preview at http://localhost:4321/porfolio/
npm run deploy    # builds and copies dist/ to the repo root
cd .. && git add -A && git commit -m "Update portfolio" && git push
```
