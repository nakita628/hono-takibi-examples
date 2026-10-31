import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/neilit/3.0.0/openapi.yaml',
  output: './src/neilit/routes.ts',
  docs: {
    output: './src/neilit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
