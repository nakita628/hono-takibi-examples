import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportka/3.0.0/openapi.yaml',
  output: './src/transportka/routes.ts',
  docs: {
    output: './src/transportka/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
