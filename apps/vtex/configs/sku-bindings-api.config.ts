import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/SKU-Bindings-API/1.0/openapi.yaml',
  output: './src/sku-bindings-api/routes.ts',
  docs: {
    output: './src/sku-bindings-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
