import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/goawrd/3.0.0/openapi.yaml',
  output: './src/goawrd/routes.ts',
  docs: {
    output: './src/goawrd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
