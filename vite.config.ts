import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/test-one/', // Asegúrate de que esta ruta sea correcta
  build: {
    outDir: 'dist',
  },
  plugins: [vue()],
});