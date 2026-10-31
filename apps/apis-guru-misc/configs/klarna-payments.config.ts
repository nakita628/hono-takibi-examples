import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/klarna.com/payments/1.0.0/openapi.yaml',
  output: './src/klarna-payments/routes.ts',
  docs: {
    output: './src/klarna-payments/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
