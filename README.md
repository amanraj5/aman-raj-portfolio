# Aman Raj — Portfolio

A dark, terminal-inspired backend engineer portfolio built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Build

```bash
npm run build
```

## Updating portfolio content

All repeatable portfolio content is kept near the top of `src/main.jsx`:

- Add a new job to the `experience` array.
- Add a project to the `projects` array.
- Add skills to the relevant group in `skills`.
- Add education entries to `education`.
- Add completed credentials to `certifications` and change the roadmap entry when AWS certification is earned.
- Update contact links in the `profile` object.

The page renders those collections automatically, so future content additions do not require restructuring the layout.

## Deploy

This can be deployed to Vercel, Netlify or GitHub Pages after running the production build.
