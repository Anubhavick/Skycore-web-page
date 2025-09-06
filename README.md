# Skycore Flight Academy — Website

This repository contains the Skycore flight academy marketing and course site — a commercial, paid project for an aviation training company. The site is built with React + Vite + TypeScript and uses Tailwind CSS for styling.

IMPORTANT: This repository contains work owned by the client. The code and assets are confidential and must not be shared outside authorized parties. Replace any placeholder contact details or company names with the official values before sharing.

## Quick checklist (what I changed / what to know)
- Project: React + Vite + TypeScript front-end for an aviation training company.
- Styling: Tailwind CSS is loaded via the CDN in `index.html` and extended with custom colors (see `index.html` for `tailwind.config`).
- Assets: Place static images in `public/assets` and reference them with absolute paths like `/assets/image.jpg`.
- Local dev: run the dev server with `npm run dev`. Build output lives in `dist` after `npm run build`.

## Getting started (developer)
Prerequisites:
- Node.js (LTS recommended, e.g. 18+)
- npm (bundled with Node)

Install and run locally:

```zsh
npm install
npm run dev
```

Build for production:

```zsh
npm run build
npm run preview   # optional, to preview the production build locally
```

## Project layout (important files)
- `src/` — React + TypeScript source files (components, pages, routes).
- `public/` — Static files served at `/` (put images in `public/assets` and reference via `/assets/...`).
- `index.html` — HTML entry; Tailwind CDN and runtime `tailwind.config` are configured here.
- `index.css` — (project CSS imported by `index.html`) — verify this file exists and is loaded; missing or malformed global CSS can cause the UI to appear white.

## Branding and styling notes
- Tailwind config: This project uses the Tailwind CDN with a runtime `tailwind.config` script in `index.html`. To change brand colors (for example `brand-green`), edit the `tailwind.config` block in `index.html` then hard-refresh the browser.
- Recommended practice: for production, migrate Tailwind to a build-time setup (postcss) so custom tokens are compiled and tree-shaken.
- Images: store any company-owned assets under `public/assets` to ensure they are available when offline.

## Common troubleshooting
- If the site looks mostly white (missing colors or layout):
  - Confirm `index.css` exists and is loading (check `Network` tab in devtools).
  - Confirm `tailwind.config` in `index.html` contains your custom color tokens and that the CDN script is loaded after that config block.
  - Hard-refresh your browser (Cmd+Shift+R on macOS) to clear cached CDN styles.
  - Ensure assets referenced with `/assets/...` are present in `public/assets`.

## Deployment
- Build the app:

```zsh
npm run build
```

- Deploy the contents of the `dist` directory to your static host (Netlify, Vercel, S3 + CloudFront, or any static CDN). Ensure the host serves `index.html` for client-side routing (use a redirect/fallback to index.html).

## Confidentiality & licensing
This repository is part of a paid client engagement and is proprietary to the client. Do not distribute or publish without explicit written permission from the client. Add or attach the formal NDA or licensing terms used in the engagement.

Suggested short header for internal distribution:
> CONFIDENTIAL: Property of Skycore Flight Academy. For internal use only. This codebase is provided under a commercial agreement and may not be redistributed without explicit permission.

## Where to edit content
- Site copy and static pages: `src/pages/*` (e.g., `HomePage.tsx`, `AboutPage.tsx`, `ContactPage.tsx`).
- Navigation: `src/components/Header.tsx` (use care with in-page scroll behaviour).
- Course data, instructors, and constants: `src/constants.tsx`.
- Course cards and detail pages: `src/components/CourseCard.tsx`, `src/pages/CourseDetailPage.tsx`.

## Contacts / Ownership
Replace these placeholders with the official company contacts before sharing this README publicly:
- Company: Skycore (AeroLeap) Flight Academy
- Product owner / point of contact: <replace-with-company-email>

## Notes for handover
- Provide the client with the following: repo access, production build artifacts, deployment credentials (if applicable), and the NDA/contract that governs reuse.
- Consider moving Tailwind to a build-time setup for better performance and more predictable theming.

---

If you want, I can:
- Add a short CONTRIBUTING.md and SECURITY.md for the repo.
- Add a simple deploy script or GitHub Actions workflow for automatic production builds.

Replace any placeholders with your official company text and contacts.