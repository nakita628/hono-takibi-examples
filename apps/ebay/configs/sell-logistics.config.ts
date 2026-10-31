import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-logistics/v1_beta.0.0/openapi.yaml',
  output: './src/sell-logistics/routes.ts',
  docs: {
    output: './src/sell-logistics/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
