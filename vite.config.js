// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Sivashanmuganathan/', // The base URL of your repository
  build: {
    rollupOptions: {
      external: [path.resolve(__dirname, 'pages/main.jsx')]
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
