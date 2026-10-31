import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/fulfillment.com/2.0/openapi.yaml',
  output: './src/fulfillment/routes.ts',
  docs: {
    output: './src/fulfillment/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
