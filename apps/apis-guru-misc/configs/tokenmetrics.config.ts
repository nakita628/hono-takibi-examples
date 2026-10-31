import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tokenmetrics.com/1.0.0/openapi.yaml',
  output: './src/tokenmetrics/routes.ts',
  docs: {
    output: './src/tokenmetrics/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
