import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/papinet.io/order_status/1.0.0/openapi.yaml',
  output: './src/papinet-io-order-status/routes.ts',
  docs: {
    output: './src/papinet-io-order-status/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
