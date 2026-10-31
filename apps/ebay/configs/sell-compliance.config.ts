import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-compliance/1.4.1/openapi.yaml',
  output: './src/sell-compliance/routes.ts',
  docs: {
    output: './src/sell-compliance/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
