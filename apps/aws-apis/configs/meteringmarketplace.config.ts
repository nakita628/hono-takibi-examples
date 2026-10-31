import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/meteringmarketplace/2016-01-14/openapi.yaml',
  output: './src/meteringmarketplace/routes.ts',
  docs: {
    output: './src/meteringmarketplace/api.md',
    curl: true,
    baseUrl: 'https://meteringmarketplace.us-east-1.amazonaws.com',
  },
})
