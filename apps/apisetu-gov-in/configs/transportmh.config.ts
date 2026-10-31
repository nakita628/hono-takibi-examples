import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportmh/3.0.0/openapi.yaml',
  output: './src/transportmh/routes.ts',
  docs: {
    output: './src/transportmh/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
