import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/va.gov/benefits/1.0.0/openapi.yaml',
  output: './src/va-gov-benefits/routes.ts',
  docs: {
    output: './src/va-gov-benefits/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
