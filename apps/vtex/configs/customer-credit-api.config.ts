import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Customer-Credit-API/1.0/openapi.yaml',
  output: './src/customer-credit-api/routes.ts',
  docs: {
    output: './src/customer-credit-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
