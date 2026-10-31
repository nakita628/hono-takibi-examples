import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/newindia/3.0.0/openapi.yaml',
  output: './src/newindia/routes.ts',
  docs: {
    output: './src/newindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
