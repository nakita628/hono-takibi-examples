import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ncert/3.0.0/openapi.yaml',
  output: './src/ncert/routes.ts',
  docs: {
    output: './src/ncert/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
