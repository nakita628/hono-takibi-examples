import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/paymentsresellersubscription/v1/openapi.yaml',
  output: './src/paymentsresellersubscription/routes.ts',
  docs: {
    output: './src/paymentsresellersubscription/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
