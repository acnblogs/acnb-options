import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      fileName: 'index',
      formats: ['es'],
      entry: './src/index.ts',
    },
  },
})
