import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/aharakar/3.0.0/openapi.yaml',
  output: './src/aharakar/routes.ts',
  docs: {
    output: './src/aharakar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
