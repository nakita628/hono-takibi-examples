import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/developer-analytics/v1_beta.0.0/openapi.yaml',
  output: './src/developer-analytics/routes.ts',
  docs: {
    output: './src/developer-analytics/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
