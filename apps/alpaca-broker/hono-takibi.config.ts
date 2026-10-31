import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://docs.alpaca.markets/openapi/broker-api.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://broker-api.sandbox.alpaca.markets',
  },
})
