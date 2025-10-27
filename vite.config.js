import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/WiTCON_2025/', // <- must match repo name & case
  plugins: [react(), tailwindcss()],
})
