/// <reference types="vitest" />
import eslintPlugin from "@nabla/vite-plugin-eslint"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"
import tsconfigPaths from "vite-tsconfig-paths"


export default defineConfig(() => ({
  plugins: [
    tsconfigPaths(),
    react(),
    eslintPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.png",
        "robots.txt",
        "apple-touch-icon.png",
        "icons/*.svg",
        "fonts/*.woff2"
      ],
      manifest: {
        theme_color: "#618DD3"
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}))
