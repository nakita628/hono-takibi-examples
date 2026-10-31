import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/archive.org/search/1.0.0/openapi.yaml',
  output: './src/archive-org-search/routes.ts',
  docs: {
    output: './src/archive-org-search/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
