import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
 
export default defineConfig({
  base: '/test-one/', // Esto asegura que las rutas de los recursos coincidan con la subcarpeta en GitHub Pages
  build: {
    outDir: 'dist',  // Carpeta de salida para la compilación
  },
  plugins: [vue()],
});