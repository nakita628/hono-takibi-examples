import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportdd/3.0.0/openapi.yaml',
  output: './src/transportdd/routes.ts',
  docs: {
    output: './src/transportdd/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
