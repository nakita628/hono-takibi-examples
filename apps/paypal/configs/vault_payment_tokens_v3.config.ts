import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/vault_payment_tokens_v3.json',
  output: './src/vault_payment_tokens_v3/routes.ts',
  docs: {
    output: './src/vault_payment_tokens_v3/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
