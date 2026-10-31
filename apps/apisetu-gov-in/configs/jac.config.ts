import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/jac/3.0.0/openapi.yaml',
  output: './src/jac/routes.ts',
  docs: {
    output: './src/jac/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
