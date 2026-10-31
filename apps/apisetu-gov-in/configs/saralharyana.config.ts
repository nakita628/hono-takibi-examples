import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/saralharyana/3.0.0/openapi.yaml',
  output: './src/saralharyana/routes.ts',
  docs: {
    output: './src/saralharyana/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
