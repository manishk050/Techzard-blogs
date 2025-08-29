// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import playformCompress from '@playform/compress';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://techzard.fun',
  integrations: [mdx(), sitemap(), partytown(), playformCompress()],
  adapter: vercel(),
});