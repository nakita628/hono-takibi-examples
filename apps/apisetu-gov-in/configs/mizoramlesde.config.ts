import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mizoramlesde/3.0.0/openapi.yaml',
  output: './src/mizoramlesde/routes.ts',
  docs: {
    output: './src/mizoramlesde/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
