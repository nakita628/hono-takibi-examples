import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Catalog-API-Seller-Portal/1.0.0/openapi.yaml',
  output: './src/catalog-api-seller-portal/routes.ts',
  docs: {
    output: './src/catalog-api-seller-portal/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
