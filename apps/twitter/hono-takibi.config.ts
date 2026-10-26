import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // X API v2
  input: 'https://api.twitter.com/2/openapi.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.x.com',
  },
})
