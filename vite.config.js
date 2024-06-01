// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

console.log('Resolved pages path:', path.resolve(__dirname, 'pages')); // Debug statement

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '/pages': path.resolve(__dirname, 'pages')
    }
  }
});
