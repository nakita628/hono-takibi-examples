import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/entitlement.marketplace/2017-01-11/openapi.yaml',
  output: './src/entitlement-marketplace/routes.ts',
  docs: {
    output: './src/entitlement-marketplace/api.md',
    curl: true,
    baseUrl: 'https://entitlement-marketplace.us-east-1.amazonaws.com',
  },
})
