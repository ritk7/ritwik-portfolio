# Ritwik Katta — Portfolio

Personal portfolio site. Next.js App Router, no CSS framework — a small neo-brutalist
design system built on CSS custom properties, with light and dark themes.

**Live:** https://ritwik-portfolio-liart.vercel.app

## Stack

- Next.js 15 (App Router, JavaScript)
- Plain CSS design system (`app/globals.css`)
- `next/font` — Space Grotesk, Space Mono, Caveat

## Features

- Light/dark theme with no flash on load (pre-hydration theme script)
- Scroll reveal animations that re-arm, so they replay on every visit and refresh
- Simulated live market panel, modelled on the NSE intraday trading platform
- Interactive terminal (`▸_` in the nav) — `help`, `projects`, `skills`, `resume`, …
- Resume served from `public/`

## Local development

```bash
npm install
npm run dev
```

Runs on http://localhost:3111

## Editing content

All copy lives in [`data/content.js`](data/content.js) — profile, experience, projects,
skills, achievements and education. The components read from it, so updating the site
means editing that one file.
