import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-negotiation/v1.1.0/openapi.yaml',
  output: './src/sell-negotiation/routes.ts',
  docs: {
    output: './src/sell-negotiation/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
