import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CheckoutService-v72.json',
  output: './src/CheckoutService-v72/routes.ts',
  docs: {
    output: './src/CheckoutService-v72/api.md',
    curl: true,
    baseUrl: 'https://checkout-test.adyen.com/v72',
  },
})
