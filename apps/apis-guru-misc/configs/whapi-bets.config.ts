import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/whapi.com/bets/2.0.0/openapi.yaml',
  output: './src/whapi-bets/routes.ts',
  docs: {
    output: './src/whapi-bets/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
