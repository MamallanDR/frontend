import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 80,       // Change dev server port to 80
    host: true      // Required for Docker
  },
  build: {
    outDir: 'dist',
  }
})
