import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/meark/3.0.0/openapi.yaml',
  output: './src/meark/routes.ts',
  docs: {
    output: './src/meark/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
