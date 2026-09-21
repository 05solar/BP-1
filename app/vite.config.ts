import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 배포용: https://05solar.github.io/BP-1/ 경로 기준
export default defineConfig({
  plugins: [react()],
  base: '/BP-1/',
})
