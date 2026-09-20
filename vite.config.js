import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the site work under any GitHub Pages URL (username.github.io/any-repo-name/)
export default defineConfig({
  base: "./",
  plugins: [react()],
});
