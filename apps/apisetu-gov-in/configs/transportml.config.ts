import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportml/3.0.0/openapi.yaml',
  output: './src/transportml/routes.ts',
  docs: {
    output: './src/transportml/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
