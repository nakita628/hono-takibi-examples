import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporthp/3.0.0/openapi.yaml',
  output: './src/transporthp/routes.ts',
  docs: {
    output: './src/transporthp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
