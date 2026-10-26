import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/checkout_orders_v2.json',
  output: './src/checkout_orders_v2/routes.ts',
  docs: {
    output: './src/checkout_orders_v2/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
