import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nowpayments.io/1.0.0/openapi.yaml',
  output: './src/nowpayments-io/routes.ts',
  docs: {
    output: './src/nowpayments-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
