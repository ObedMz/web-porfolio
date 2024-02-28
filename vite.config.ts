import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['jpg', 'jpeg', 'png', 'svg', 'webp'], // Tipos de archivos que serán manejados por Vite

})
