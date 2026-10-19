# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Project

Personal portfolio of Nicolas Facendini, built with Astro 5 and styled like the VS Code interface. React is used for the interactive pieces, Tailwind CSS 3 for styling. It is a fully static site deployed on Vercel (no server code, no AI). UI copy is Spanish (voseo) with an English version.

## Commands

Run from the project root:

- `npm install` - install dependencies
- `npm run dev` - dev server at `localhost:4321`
- `npm run build` - build to `./dist/`
- `npm run preview` - serve the production build

## Environment variables

See `.env.example`. `PUBLIC_*` variables are inlined into client code at build time.

- `PUBLIC_WEB3FORMS_KEY` - contact form (Web3Forms). Without it the form shows the "could not be sent" notice.
- `SITE_URL` - optional; otherwise `VERCEL_PROJECT_PRODUCTION_URL` is used for absolute URLs (Open Graph).

## Architecture

- `src/layouts/Layout.astro` - page shell: Header, side panels (`PanelSwicher.jsx` + `SideBar.jsx`), tabs (`MenuTabs.jsx`), Footer, ChatBot. Uses Astro's `ClientRouter`.
- `src/pages/index.astro` - the single page; it stacks the sections in `src/components/about_me/` (Hero, AboutMe, Experience, Habilidades, Proyectos, Contacto). Sections wrap `LayoutContent.astro`, which takes `titleKey` / `descriptionKey` translation keys.
- Side panels live in `src/components/side_menu/`. The Explorer tree (`explorerData.js`) builds the `my_projects` folder from `projects.js`; each project links to its card (`#proyecto-<slug>`).
- Header: the File/Edit menu collapses into a hamburger below `md`; the page title is centered with absolute positioning.

## Content data (single sources of truth)

- `src/data/projects.js` - projects (cards, search panel, Explorer, chatbot answers). Use `technologies` and optional `descriptionEn`; screenshots go in `public/projects/`.
- `src/data/experience.js` - experience and education, bilingual `{ es, en }` (page and chatbot).
- `src/data/chatFaq.js` - the chatbot's predefined questions and answers (bilingual, simple markdown). The bot only answers these; there is no free text input and no AI. Experience and projects answers read the two files above; the rest is written by hand from the CV, so keep it in sync.

## Internationalization

- Strings live in `src/i18n/translations.js` (`es` and `en` must have the same keys).
- Static markup: add `data-i18n="key"` (also `data-i18n-placeholder`, `-title`, `-aria-label`). Content that comes from data files uses `data-lang-es` / `data-lang-en` attributes.
- `src/i18n/lang.js` applies the language to the DOM, stores it in `localStorage` and emits `langchange`. React components use the `useLang()` hook.
- Never put `↗`-style symbols in translated text; Windows renders them as emoji.

## Contact form

`Contacto.astro` validates in the browser and posts to Web3Forms. The form needs `data-astro-reload`: otherwise `ClientRouter` intercepts the submit and navigates to `/?name=...`.

## Responsive notes

- The Explorer panel can take ~350px, so the viewport width does not tell how much room the content has. Layouts that depend on content width (About, Projects) use CSS container queries in a `<style>` block, not Tailwind breakpoints.
- Spacing between sections is set in `LayoutContent.astro` (`py-4 md:py-8`).

## Styling

Palette in `tailwind.config.js`: `main #181818`, `secondary #1F1F1F`, `primaryText #C4C8D1`, `accent #7FDBFF`, `skillColor #292939`. Prefer these names over raw hex values. Icons are components in `src/components/icons/` (`.astro` unless they need React).
