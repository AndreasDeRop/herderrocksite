import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://herderrock.be',
  output: "hybrid",
  adapter: cloudflare()
});