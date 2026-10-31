import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/analytics/v3/openapi.yaml',
  output: './src/analytics/routes.ts',
  docs: {
    output: './src/analytics/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
