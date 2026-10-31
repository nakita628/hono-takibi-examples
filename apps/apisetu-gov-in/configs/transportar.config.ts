import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportar/3.0.0/openapi.yaml',
  output: './src/transportar/routes.ts',
  docs: {
    output: './src/transportar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
