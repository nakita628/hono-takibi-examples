import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/kkhsou/3.0.0/openapi.yaml',
  output: './src/kkhsou/routes.ts',
  docs: {
    output: './src/kkhsou/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
