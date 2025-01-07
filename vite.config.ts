import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import ssr from 'vite-plugin-ssr/plugin'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
    ssr()
  ],
  ssr: {
    noExternal: ["vuetify"], // Mark Vuetify as not externalized during SSR
  },
  resolve: {
    alias: {
      "#root": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
