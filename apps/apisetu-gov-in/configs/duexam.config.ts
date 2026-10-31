import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/duexam/3.0.0/openapi.yaml',
  output: './src/duexam/routes.ts',
  docs: {
    output: './src/duexam/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
