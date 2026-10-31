import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/ote-godaddy.com/orders/1.0.0/openapi.yaml',
  output: './src/orders/routes.ts',
  docs: {
    output: './src/orders/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
