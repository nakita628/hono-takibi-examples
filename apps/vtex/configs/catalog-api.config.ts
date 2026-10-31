import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Catalog-API/1.0/openapi.yaml',
  output: './src/catalog-api/routes.ts',
  docs: {
    output: './src/catalog-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
