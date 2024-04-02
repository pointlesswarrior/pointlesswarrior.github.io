import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
  },
  site: "https://aryxst.github.io",
  base:"adamkhalz-portfolio",
  integrations: [sitemap()],
});
