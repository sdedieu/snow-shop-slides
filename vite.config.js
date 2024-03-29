import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from "unplugin-vue-components/vite";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: '3001',
  },
  plugins: [vue(), Components()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "/src") }],
  },
  build: {
    outDir: './docs'
  },
  base: "/snow-shop-slides/",
})
