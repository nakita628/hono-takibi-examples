import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-analytics/1.2.0/openapi.yaml',
  output: './src/sell-analytics/routes.ts',
  docs: {
    output: './src/sell-analytics/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
