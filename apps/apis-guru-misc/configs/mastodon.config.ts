import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mastodon.local/1.0/openapi.yaml',
  output: './src/mastodon/routes.ts',
  docs: {
    output: './src/mastodon/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
