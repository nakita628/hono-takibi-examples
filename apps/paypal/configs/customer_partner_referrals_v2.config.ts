import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/customer_partner_referrals_v2.json',
  output: './src/customer_partner_referrals_v2/routes.ts',
  docs: {
    output: './src/customer_partner_referrals_v2/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
