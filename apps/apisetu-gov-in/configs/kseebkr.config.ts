import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kseebkr/3.0.0/openapi.yaml',
  output: './src/kseebkr/routes.ts',
  docs: {
    output: './src/kseebkr/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
