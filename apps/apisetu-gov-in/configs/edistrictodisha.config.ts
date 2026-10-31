import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictodisha/3.0.0/openapi.yaml',
  output: './src/edistrictodisha/routes.ts',
  docs: {
    output: './src/edistrictodisha/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
