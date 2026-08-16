import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'Dashboard/index.html'),
        devLab: resolve(__dirname, 'DevLab/index.html'),
        studyMaterial: resolve(__dirname, 'Study-Material/index.html'),
      },
    },
  },
});
