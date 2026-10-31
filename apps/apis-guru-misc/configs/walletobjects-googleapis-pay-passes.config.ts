import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/walletobjects.googleapis.com/pay-passes/v1/openapi.yaml',
  output: './src/walletobjects-googleapis-pay-passes/routes.ts',
  docs: {
    output: './src/walletobjects-googleapis-pay-passes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
