import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/puekar/3.0.0/openapi.yaml',
  output: './src/puekar/routes.ts',
  docs: {
    output: './src/puekar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
