import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-feed/v1.3.1/openapi.yaml',
  output: './src/sell-feed/routes.ts',
  docs: {
    output: './src/sell-feed/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
