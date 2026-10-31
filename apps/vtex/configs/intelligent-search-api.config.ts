import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Intelligent-Search-API/0.1.12/openapi.yaml',
  output: './src/intelligent-search-api/routes.ts',
  docs: {
    output: './src/intelligent-search-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
