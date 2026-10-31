import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/msde/3.0.0/openapi.yaml',
  output: './src/msde/routes.ts',
  docs: {
    output: './src/msde/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
