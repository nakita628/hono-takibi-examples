import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/cisce/3.0.0/openapi.yaml',
  output: './src/cisce/routes.ts',
  docs: {
    output: './src/cisce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
