import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  // Esta es la configuración base, se utiliza para definir la ruta base
  // Si estás desplegando en GitHub Pages, la ruta base debe ser el nombre del repo.
  base: '/test-one/', // Reemplaza 'test-one' con el nombre de tu repositorio si es diferente.

  plugins: [vue()],

  // Otras configuraciones opcionales
  build: {
    // Opciones adicionales para la construcción del proyecto
    outDir: 'dist', // Directorio de salida (por defecto es 'dist')
  },

  server: {
    // Configuración para el servidor de desarrollo
    port: 3000, // Puerto donde correrá tu servidor local
  },
});