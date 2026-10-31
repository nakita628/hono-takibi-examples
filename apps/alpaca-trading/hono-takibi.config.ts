import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://docs.alpaca.markets/openapi/trading-api.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://paper-api.alpaca.markets',
  },
})
