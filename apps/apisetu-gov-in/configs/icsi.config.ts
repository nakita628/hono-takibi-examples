import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/icsi/3.0.0/openapi.yaml',
  output: './src/icsi/routes.ts',
  docs: {
    output: './src/icsi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
