import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // sonallux/spotify-web-api (community)
  input: 'https://raw.githubusercontent.com/sonallux/spotify-web-api/main/fixed-spotify-open-api.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
