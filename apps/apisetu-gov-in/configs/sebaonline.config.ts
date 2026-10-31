import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/sebaonline/3.0.0/openapi.yaml',
  output: './src/sebaonline/routes.ts',
  docs: {
    output: './src/sebaonline/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
