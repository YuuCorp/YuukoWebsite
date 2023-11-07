import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue()],
  vite: {
    server: {
      port: process.env.PORT || 3000,
    }
  }
});