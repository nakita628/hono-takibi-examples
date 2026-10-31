import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/bharatpetroleum/3.0.0/openapi.yaml',
  output: './src/bharatpetroleum/routes.ts',
  docs: {
    output: './src/bharatpetroleum/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
