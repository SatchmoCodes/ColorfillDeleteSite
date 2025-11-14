import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/https://satchmocodes.github.io/ColorfillDeleteSite/",
  plugins: [react()],
});
