import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Netlify API
  input: 'https://open-api.netlify.com/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.netlify.com/api/v1',
  },
})
