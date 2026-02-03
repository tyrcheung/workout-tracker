# Workout Tracker

A SvelteKit app for tracking workouts, sessions, and sets. Built for static hosting.

## Development

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

To open the app in a new tab:

```sh
npm run dev -- --open
```

## Production Build

Create a production build:

```sh
npm run build
```

Preview the build locally:

```sh
npm run preview
```

## Deployment (GitHub Pages via Actions)

This repo deploys to GitHub Pages using a GitHub Actions workflow at
`.github/workflows/deploy.yml`.

What the workflow does:
- Triggers on pushes to `main` and on manual runs (`workflow_dispatch`).
- Uses Node.js 20, installs dependencies with `npm ci`, and runs `npm run build`.
- Publishes the `build/` output folder to GitHub Pages.
- Creates `.nojekyll` and a `404.html` copy of `index.html` for SPA routing.

Required repo settings:
- In GitHub, go to `Settings` -> `Pages`.
- Set `Source` to `GitHub Actions`.

Actions setup:
- Ensure GitHub Actions is enabled for the repo (Settings -> Actions -> General).
- If your default branch is not `main`, update the workflow trigger in `.github/workflows/deploy.yml`.

How to deploy:
- Automatic: push to `main` and the workflow deploys.
- Manual: run the `Deploy to GitHub Pages` workflow from the Actions tab.

Base path configuration:
- `svelte.config.js` sets `paths.base` to `/workout-tracker` for production.
- If you rename the repo, update that base path to match the new repo name.
