import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/notifications_webhooks_v1.json',
  output: './src/notifications_webhooks_v1/routes.ts',
  docs: {
    output: './src/notifications_webhooks_v1/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
