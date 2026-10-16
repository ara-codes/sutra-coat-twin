import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // Base path for the deployed site. Defaults to "/" for local dev and
  // root-hosted deploys; set VITE_BASE=/<repo>/ when publishing to a GitHub
  // Pages project site (https://<user>.github.io/<repo>/). The router reads
  // import.meta.env.BASE_URL so client-side routes follow suit.
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: false,
    // Optional: proxy API calls to the FastAPI backend when it is running.
    // Set VITE_API_PROXY=/api to enable (see README).
    proxy: process.env.VITE_API_PROXY
      ? {
          [process.env.VITE_API_PROXY]: {
            target: "http://127.0.0.1:8000",
            changeOrigin: true,
          },
        }
      : undefined,
  },
  build: {
    chunkSizeWarningLimit: 1200,
  },
});
