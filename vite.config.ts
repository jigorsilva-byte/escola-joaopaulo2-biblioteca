import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise warning limit a bit and split vendor chunk to keep initial bundle smaller
    chunkSizeWarningLimit: 1000, // KB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('recharts') || id.includes('d3') || id.includes('luxon')) {
              return 'vendor_charts';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
