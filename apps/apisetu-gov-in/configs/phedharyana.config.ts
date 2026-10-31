import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/phedharyana/3.0.0/openapi.yaml',
  output: './src/phedharyana/routes.ts',
  docs: {
    output: './src/phedharyana/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
