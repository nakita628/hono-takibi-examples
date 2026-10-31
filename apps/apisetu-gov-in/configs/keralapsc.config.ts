import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/keralapsc/3.0.0/openapi.yaml',
  output: './src/keralapsc/routes.ts',
  docs: {
    output: './src/keralapsc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
