import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Optional: allows you to use things like SCSS, PostCSS etc.
  preprocess: preprocess(),

  kit: {
    // Adapter for static hosting
    adapter: adapter({
      fallback: 'index.html' // important for SPA routing
    }),

    // Base path for GitHub Pages
    // Use your repo name as base when deploying
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/workout-tracker' : ''
    },

    // Optional: app directory for built assets
    appDir: 'app'
  }
};

export default config;
