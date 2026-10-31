import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Payments-Gateway-API/1.0/openapi.yaml',
  output: './src/payments-gateway-api/routes.ts',
  docs: {
    output: './src/payments-gateway-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
