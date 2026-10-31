import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ucobank/3.0.0/openapi.yaml',
  output: './src/ucobank/routes.ts',
  docs: {
    output: './src/ucobank/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
