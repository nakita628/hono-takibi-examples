import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://docs.alpaca.markets/openapi/market-data-api.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://data.alpaca.markets',
  },
})
