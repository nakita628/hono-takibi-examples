import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/statisticsrajasthan/3.0.0/openapi.yaml',
  output: './src/statisticsrajasthan/routes.ts',
  docs: {
    output: './src/statisticsrajasthan/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
