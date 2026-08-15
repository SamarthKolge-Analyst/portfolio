import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'Dashboard/index.html'),
        programmer: resolve(__dirname, 'Programmer/index.html'),
        studyMaterial: resolve(__dirname, 'Study-Material/index.html'),
      },
    },
  },
});
