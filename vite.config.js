import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // Ensures a browser-like environment
    globals: true, // Makes global functions like `describe` available
  },
});
