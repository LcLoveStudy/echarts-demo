import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 自动引入依赖
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: './src/auto-imports.d.ts'
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer, tailwindcss]
    }
  },
  resolve: {
    // 配置别名
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
