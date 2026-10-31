import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/revenueassam/3.0.0/openapi.yaml',
  output: './src/revenueassam/routes.ts',
  docs: {
    output: './src/revenueassam/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
