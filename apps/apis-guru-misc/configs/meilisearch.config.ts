import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meilisearch.com/1.0.0/openapi.yaml',
  output: './src/meilisearch/routes.ts',
  docs: {
    output: './src/meilisearch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
