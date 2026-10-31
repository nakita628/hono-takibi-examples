import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportts/3.0.0/openapi.yaml',
  output: './src/transportts/routes.ts',
  docs: {
    output: './src/transportts/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
