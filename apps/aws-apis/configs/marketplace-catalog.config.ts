import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/marketplace-catalog/2018-09-17/openapi.yaml',
  output: './src/marketplace-catalog/routes.ts',
  docs: {
    output: './src/marketplace-catalog/api.md',
    curl: true,
    baseUrl: 'https://marketplace-catalog.us-east-1.amazonaws.com',
  },
})
