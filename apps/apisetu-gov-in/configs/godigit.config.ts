import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/godigit/3.0.0/openapi.yaml',
  output: './src/godigit/routes.ts',
  docs: {
    output: './src/godigit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
