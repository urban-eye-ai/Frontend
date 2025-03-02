import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import rollupNodePolyFill from "rollup-plugin-polyfill-node";
import tailwindcss from 'tailwindcss'

export default defineConfig({
  plugins: [
    react(),
    rollupNodePolyFill(),
  ],
  define: {
    global: "globalThis", // Ensure 'global' is defined for browser environment
  },
  resolve: {
    alias: {
      stream: "stream-browserify",
      crypto: "crypto-browserify",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  optimizeDeps: {
    include: ['lottie-react']
  }
});
