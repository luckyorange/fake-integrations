import path from 'path'
import { defineConfig } from 'vite'

module.exports = defineConfig({
  plugins: [],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts']
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    minify: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'myScript',
      fileName: format => 'main.js',
      formats: ['iife']
    }
  }
})
