import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/futuregenerali/3.0.0/openapi.yaml',
  output: './src/futuregenerali/routes.ts',
  docs: {
    output: './src/futuregenerali/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
