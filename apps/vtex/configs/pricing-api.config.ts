import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Pricing-API/1.0/openapi.yaml',
  output: './src/pricing-api/routes.ts',
  docs: {
    output: './src/pricing-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
