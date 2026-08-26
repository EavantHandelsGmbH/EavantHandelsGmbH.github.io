# EAVANT Handels GmbH — Website

A modern, multilingual website for **EAVANT Handels GmbH** (Transport, Kurier &
Ressourcenmanagement, Wien), built from scratch with **React + Vite + TailwindCSS**.

## Highlights

- **4 languages** — Deutsch (default), English, Italiano, العربية — with full
  **right-to-left (RTL)** support for Arabic. Language choice is remembered in the browser.
- **Premium logistics design** — deep navy brand palette (from the logo) with an electric
  route-blue accent, animated route lines and a Europe coverage-network map.
- **Two divisions** highlighted: Transport & Logistik and Entsorgung & Ressourcenmanagement.
- Animated, responsive, accessible; legal pages (Impressum, Datenschutz) included.
- Contact form wired to the existing `formsubmit.co/office@eavant.at` endpoint.

## Getting started

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build
npm run build:single   # single self-contained index.html -> dist-single/
```

## Structure

```
public/            favicon, og-image
src/
  i18n/            translations.js (DE/EN/IT/AR) + LanguageContext (RTL)
  components/      Nav, Hero, Services, Coverage, Process, Why, About, CTA, Footer
  pages/           Home, Impressum, Datenschutz
  assets/media/    logo variants + van (real brand assets)
```

All visible text lives in `src/i18n/translations.js`. Contact details are in the `CONTACT`
object there; coverage hubs in `HUBS`; services in `SERVICE_KEYS` / `SERVICE_META`.

## Notes for the owner

- **Address:** the site uses **Frauenstiftgasse 12A/6, 1210 Wien** (per the business
  registry). The previous site's Impressum listed a different address that appeared to be a
  copy-paste error — please confirm the correct one.
- **UID-Nr.:** intentionally left out of the Impressum because no valid value was available.
  Please add your real ATU number in `src/pages/Impressum.jsx`.
- Deployment: `npm run build` outputs a static `dist/` (hash routing — no server rewrites
  needed). Works on GitHub Pages, Cloudflare Pages, Netlify, etc. Keep the `CNAME` (eavant.at).
