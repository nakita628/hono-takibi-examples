import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportnl/3.0.0/openapi.yaml',
  output: './src/transportnl/routes.ts',
  docs: {
    output: './src/transportnl/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
