// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dashubei.github.io",
  vite: {
    resolve: {
      alias: {
        "@": new URL("./src", import.meta.url).pathname,
        "@/components": new URL("./src/components", import.meta.url).pathname,
        "@/layouts": new URL("./src/layouts", import.meta.url).pathname,
        "@/pages": new URL("./src/pages", import.meta.url).pathname,
        "@/assets": new URL("./src/assets", import.meta.url).pathname,
        "@/styles": new URL("./src/styles", import.meta.url).pathname,
      },
    },
  },
});
