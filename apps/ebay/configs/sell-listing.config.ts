import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-listing/v1_beta.3.0/openapi.yaml',
  output: './src/sell-listing/routes.ts',
  docs: {
    output: './src/sell-listing/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
