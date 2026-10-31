import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redhat.com/catalog_inventory/1.0.0/openapi.yaml',
  output: './src/redhat-catalog-inventory/routes.ts',
  docs: {
    output: './src/redhat-catalog-inventory/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
