import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/revenueodisha/3.0.0/openapi.yaml',
  output: './src/revenueodisha/routes.ts',
  docs: {
    output: './src/revenueodisha/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
