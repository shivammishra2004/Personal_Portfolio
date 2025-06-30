import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external access (important!)
    port: 3000,
    allowedHosts: [
      // 'a449-2406-b400-72-af20-c0dc-1755-83ec-6db3.ngrok-free.app'
    ]
  }
})
