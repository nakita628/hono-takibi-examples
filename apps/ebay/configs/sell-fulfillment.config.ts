import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-fulfillment/v1.20.0/openapi.yaml',
  output: './src/sell-fulfillment/routes.ts',
  docs: {
    output: './src/sell-fulfillment/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
