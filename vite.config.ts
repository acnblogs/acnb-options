import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        extra: resolve(__dirname, 'src/extra.ts'),
        plugins: resolve(__dirname, 'src/plugins.ts'),
      },
    },
  },
})
