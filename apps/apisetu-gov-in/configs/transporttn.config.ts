import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transporttn/3.0.0/openapi.yaml',
  output: './src/transporttn/routes.ts',
  docs: {
    output: './src/transporttn/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
