import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/trakt.tv/1.0.0/openapi.yaml',
  output: './src/trakt-tv/routes.ts',
  docs: {
    output: './src/trakt-tv/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
