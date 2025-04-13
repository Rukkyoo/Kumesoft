import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            backgroundImage: {
              'download': "url('./src/assets/download.jpeg')",
            }
          }
        }
      }
    }),
  ],
})