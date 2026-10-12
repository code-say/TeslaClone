# Tesla Clone

A responsive clone of the Tesla homepage, built with **React 18**, **Vite** and **styled-components**.

> Portfolio / learning project — not affiliated with Tesla, Inc.

![tesla-clone](https://user-images.githubusercontent.com/78550096/128695777-329afed0-7193-4b7b-9e69-f10e86babfd5.jpg)

## Features

- Full-screen, scroll-snapping sections for each product (Model S, Y, 3, X, Solar Panels, Solar Roof, Accessories)
- Fade-in text and buttons as each section scrolls into view (IntersectionObserver)
- Translucent header that blurs the content behind it once you scroll
- Slide-out menu drawer with backdrop, Escape-to-close and scroll lock
- Mobile-first layout, keyboard focus styles and `prefers-reduced-motion` support
- WebP images (~75% smaller than the original JPEGs)

## What changed in v2 (2026)

The original version was built on Create React App 4 and React 17, which no longer builds on current Node.js. v2:

- Migrated from CRA to **Vite 6** and **React 18** (`createRoot`)
- Removed Material-UI and the unused Redux counter template (icons are inline SVG now)
- Upgraded to styled-components 6 with transient props
- Fixed typos ("Modle" → "Model") and a broken drawer border style
- Section content now lives in `src/data.js`
- Added a Netlify config (`netlify.toml`)

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview
```

## Project structure

```
src/
  main.jsx            entry point
  App.jsx             renders header + sections
  data.js             section and menu content
  components/
    Header.jsx        top bar + slide-out drawer
    Section.jsx       full-screen product section
    Footer.jsx
    Icons.jsx
public/images/        logo and WebP backgrounds
```
