import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bput/3.0.0/openapi.yaml',
  output: './src/bput/routes.ts',
  docs: {
    output: './src/bput/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
