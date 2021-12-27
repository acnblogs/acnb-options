import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      fileName: 'index',
      formats: ['es'],
      entry: './src/index.ts',
    },
  },
})
