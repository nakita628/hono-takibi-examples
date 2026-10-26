import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/reporting_transactions_v1.json',
  output: './src/reporting_transactions_v1/routes.ts',
  docs: {
    output: './src/reporting_transactions_v1/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
