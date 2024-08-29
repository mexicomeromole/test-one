import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: '/test-one/', // Asegúrate de que esta ruta es correcta y corresponde al nombre de tu repositorio.
  plugins: [vue()],
});