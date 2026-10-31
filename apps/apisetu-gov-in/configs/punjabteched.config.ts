import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/punjabteched/3.0.0/openapi.yaml',
  output: './src/punjabteched/routes.ts',
  docs: {
    output: './src/punjabteched/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
