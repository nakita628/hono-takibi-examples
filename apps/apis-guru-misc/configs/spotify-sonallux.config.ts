import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spotify.com/sonallux/2023.2.27/openapi.yaml',
  output: './src/spotify-sonallux/routes.ts',
  docs: {
    output: './src/spotify-sonallux/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
