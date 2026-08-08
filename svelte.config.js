import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
  extensions: ['.md', '.svx'],
  smartypants: {
    dashes: 'oldschool'
  },
  remarkPlugins: [],
  rehypePlugins: []
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],
  kit: { adapter: adapter() },
  extensions: ['.svelte', '.svx', '.md']
};

export default config;
