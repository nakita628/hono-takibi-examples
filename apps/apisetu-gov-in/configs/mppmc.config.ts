import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/mppmc/3.0.0/openapi.yaml',
  output: './src/mppmc/routes.ts',
  docs: {
    output: './src/mppmc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
