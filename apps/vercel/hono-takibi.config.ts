import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Vercel REST API
  input: 'https://openapi.vercel.sh/',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.vercel.com',
  },
})
