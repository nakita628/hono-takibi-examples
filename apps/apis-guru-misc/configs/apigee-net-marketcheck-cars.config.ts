import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apigee.net/marketcheck-cars/2.01/openapi.yaml',
  output: './src/apigee-net-marketcheck-cars/routes.ts',
  docs: {
    output: './src/apigee-net-marketcheck-cars/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
