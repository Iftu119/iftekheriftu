import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://iftu119.github.io',
  base: '/iftekheriftu',
  integrations: [mdx()],
});
