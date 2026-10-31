import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/chaingateway.io/1.0/openapi.yaml',
  output: './src/chaingateway-io/routes.ts',
  docs: {
    output: './src/chaingateway-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
