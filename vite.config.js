// vite.config.js

import { defineConfig } from "vite";

export default defineConfig({
  base: "/tokkiworld/",
  build: {
    outDir: "dist",
    assetsInclude: ["**/*.glb"],
    rollupOptions: {
      treeshake: false,
    },
  },
  resolve: {
    alias: {
      three: "three", // 이 부분을 확인하세요.
    },
  },
});
