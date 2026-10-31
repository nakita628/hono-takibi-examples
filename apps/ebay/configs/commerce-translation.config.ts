import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/commerce-translation/1/openapi.yaml',
  output: './src/commerce-translation/routes.ts',
  docs: {
    output: './src/commerce-translation/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
