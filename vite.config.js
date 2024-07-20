import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory is now 'build' instead of 'dist'
    chunkSizeWarningLimit: Number.MAX_SAFE_INTEGER, // Set limit to maximum safe integer
  }
})