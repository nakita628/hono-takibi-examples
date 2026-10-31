import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redeal.io/analytics/1.0.0/openapi.yaml',
  output: './src/redeal-io-analytics/routes.ts',
  docs: {
    output: './src/redeal-io-analytics/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
