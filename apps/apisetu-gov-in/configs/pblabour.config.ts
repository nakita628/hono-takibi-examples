import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pblabour/3.0.0/openapi.yaml',
  output: './src/pblabour/routes.ts',
  docs: {
    output: './src/pblabour/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
