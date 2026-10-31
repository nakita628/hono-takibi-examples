import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Checkout-API/1.0/openapi.yaml',
  output: './src/checkout-api/routes.ts',
  docs: {
    output: './src/checkout-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
