import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/commerce-catalog/v1_beta.5.0/openapi.yaml',
  output: './src/commerce-catalog/routes.ts',
  docs: {
    output: './src/commerce-catalog/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
