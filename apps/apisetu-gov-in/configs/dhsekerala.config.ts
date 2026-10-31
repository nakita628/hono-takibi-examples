import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dhsekerala/3.0.0/openapi.yaml',
  output: './src/dhsekerala/routes.ts',
  docs: {
    output: './src/dhsekerala/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
