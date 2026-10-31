import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/pan/3.0.0/openapi.yaml',
  output: './src/pan/routes.ts',
  docs: {
    output: './src/pan/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
