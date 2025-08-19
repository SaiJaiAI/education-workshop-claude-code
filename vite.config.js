import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/education-workshop-claude-code/'   // IMPORTANT for GitHub Pages routing
})