import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/hindustanpetroleum/3.0.0/openapi.yaml',
  output: './src/hindustanpetroleum/routes.ts',
  docs: {
    output: './src/hindustanpetroleum/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
