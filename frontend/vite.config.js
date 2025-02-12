import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  build: {
    assetsInclude: ['**/*.pdf'], // Ensure Vite includes PDF files in the build
  },
  resolve: {
    alias: {
      // Optional: Add aliases for easier imports
      '@': '/src', // Example: Use '@' to refer to the 'src' directory
    },
  },
});
