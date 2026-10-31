import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Orders-API-(PII-version)/1.0/openapi.yaml',
  output: './src/orders-api-pii-version/routes.ts',
  docs: {
    output: './src/orders-api-pii-version/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
