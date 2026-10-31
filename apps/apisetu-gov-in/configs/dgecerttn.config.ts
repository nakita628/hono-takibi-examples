import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/dgecerttn/3.0.0/openapi.yaml',
  output: './src/dgecerttn/routes.ts',
  docs: {
    output: './src/dgecerttn/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
