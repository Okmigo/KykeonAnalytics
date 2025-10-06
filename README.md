# Kykeon Analytics UI

A modern, accessibility-first React + Tailwind CSS experience for the Kykeon Analytics harm-reduction intelligence platform.

## Getting started

```bash
npm install
npm run dev
```

The development server runs on [http://localhost:5173](http://localhost:5173) by default.

## Available scripts

- `npm run dev` – start the Vite development server with hot module replacement.
- `npm run build` – generate a production-ready build in the `dist` directory.
- `npm run preview` – locally preview the production build.

## Tech stack

- **React 18** with React Router for page routing.
- **Tailwind CSS** with custom theming, gradients, and accessibility-focused components.
- **Headless UI** and **Heroicons** for accessible, animated navigation and iconography.

## Accessibility & UX

- Keyboard and screen-reader friendly navigation with sticky top bar and skip link.
- High-contrast color palette exceeding WCAG AA contrast ratios.
- Responsive layout with fluid grids and touch-friendly interactions across viewports.
- Micro-animations, focus states, and clear CTAs for engaging user flows.

## Project structure

```
KykeonAnalytics/
├── index.html
├── package.json
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── main.jsx
│   └── styles.css
├── tailwind.config.cjs
└── vite.config.js
```

## License

© Kykeon Analytics. All rights reserved.
