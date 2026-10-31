import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mizorampolice/3.0.0/openapi.yaml',
  output: './src/mizorampolice/routes.ts',
  docs: {
    output: './src/mizorampolice/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
