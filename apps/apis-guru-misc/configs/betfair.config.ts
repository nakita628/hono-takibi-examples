import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/betfair.com/1.0.1423/openapi.yaml',
  output: './src/betfair/routes.ts',
  docs: {
    output: './src/betfair/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
