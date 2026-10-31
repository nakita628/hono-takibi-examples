import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-marketing/v1.15.0/openapi.yaml',
  output: './src/sell-marketing/routes.ts',
  docs: {
    output: './src/sell-marketing/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
