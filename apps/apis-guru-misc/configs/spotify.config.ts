import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/spotify.com/1.0.0/openapi.yaml',
  output: './src/spotify/routes.ts',
  docs: {
    output: './src/spotify/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
