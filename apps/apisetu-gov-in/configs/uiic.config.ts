import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/uiic/3.0.0/openapi.yaml',
  output: './src/uiic/routes.ts',
  docs: {
    output: './src/uiic/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
