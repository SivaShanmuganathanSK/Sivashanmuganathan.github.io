import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Sivashanmuganathan/', // Adjust this if necessary
  resolve: {
    alias: {
      '/pages': path.resolve(__dirname, 'pages')
    }
  },
  build: {
    rollupOptions: {
      // Ensure no modules are marked as external unless necessary
      external: []
    }
  }
});
