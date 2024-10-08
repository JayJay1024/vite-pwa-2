import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "",

  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,
    manifestFilename: "manifest.json",

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'vite-pwa-2',
      short_name: 'vite-pwa-2',
      description: 'vite-pwa-2',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },

    selfDestroying: false,
  })],

  build: {
    sourcemap: true,
  },
})