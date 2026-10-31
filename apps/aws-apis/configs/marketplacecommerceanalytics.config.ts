import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/marketplacecommerceanalytics/2015-07-01/openapi.yaml',
  output: './src/marketplacecommerceanalytics/routes.ts',
  docs: {
    output: './src/marketplacecommerceanalytics/api.md',
    curl: true,
    baseUrl: 'https://marketplacecommerceanalytics.us-east-1.amazonaws.com',
  },
})
