import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/buy-deal/v1.3.0/openapi.yaml',
  output: './src/buy-deal/routes.ts',
  docs: {
    output: './src/buy-deal/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
