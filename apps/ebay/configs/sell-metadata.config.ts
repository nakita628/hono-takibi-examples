import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-metadata/v1.6.0/openapi.yaml',
  output: './src/sell-metadata/routes.ts',
  docs: {
    output: './src/sell-metadata/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
