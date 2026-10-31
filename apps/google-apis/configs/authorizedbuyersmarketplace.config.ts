import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/authorizedbuyersmarketplace/v1/openapi.yaml',
  output: './src/authorizedbuyersmarketplace/routes.ts',
  docs: {
    output: './src/authorizedbuyersmarketplace/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
