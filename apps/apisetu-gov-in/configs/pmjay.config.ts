import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pmjay/3.0.0/openapi.yaml',
  output: './src/pmjay/routes.ts',
  docs: {
    output: './src/pmjay/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
