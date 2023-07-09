import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        unit: resolve(__dirname, 'html/unit.html'),
        civ: resolve(__dirname, 'html/civ.html'),
        card: resolve(__dirname, 'html/card.html'),
      },
    },
  },
})
