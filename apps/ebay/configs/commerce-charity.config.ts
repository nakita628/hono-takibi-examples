import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/commerce-charity/v1.2.1/openapi.yaml',
  output: './src/commerce-charity/routes.ts',
  docs: {
    output: './src/commerce-charity/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
