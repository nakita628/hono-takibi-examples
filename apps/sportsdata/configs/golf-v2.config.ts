import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/golf-v2/1.0/openapi.yaml',
  output: './src/golf-v2/routes.ts',
  docs: {
    output: './src/golf-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
