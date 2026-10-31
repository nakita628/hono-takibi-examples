import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/csc/3.0.0/openapi.yaml',
  output: './src/csc/routes.ts',
  docs: {
    output: './src/csc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
