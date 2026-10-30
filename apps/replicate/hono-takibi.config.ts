import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.replicate.com/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.replicate.com',
  },
})
