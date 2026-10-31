import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-recommendation/1.1.0/openapi.yaml',
  output: './src/sell-recommendation/routes.ts',
  docs: {
    output: './src/sell-recommendation/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
