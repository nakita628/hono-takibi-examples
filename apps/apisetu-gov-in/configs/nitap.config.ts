import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/nitap/3.0.0/openapi.yaml',
  output: './src/nitap/routes.ts',
  docs: {
    output: './src/nitap/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
