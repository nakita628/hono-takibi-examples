import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/edistrictup/3.0.0/openapi.yaml',
  output: './src/edistrictup/routes.ts',
  docs: {
    output: './src/edistrictup/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
