import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/rajasthandsa/3.0.0/openapi.yaml',
  output: './src/rajasthandsa/routes.ts',
  docs: {
    output: './src/rajasthandsa/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
