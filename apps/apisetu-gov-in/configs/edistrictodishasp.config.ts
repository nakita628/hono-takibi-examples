import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictodishasp/3.0.0/openapi.yaml',
  output: './src/edistrictodishasp/routes.ts',
  docs: {
    output: './src/edistrictodishasp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
