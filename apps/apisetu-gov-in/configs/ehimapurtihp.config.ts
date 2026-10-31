import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ehimapurtihp/3.0.0/openapi.yaml',
  output: './src/ehimapurtihp/routes.ts',
  docs: {
    output: './src/ehimapurtihp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
