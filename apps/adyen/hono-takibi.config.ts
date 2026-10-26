import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Adyen Checkout API v71 (Adyen/adyen-openapi)
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CheckoutService-v71.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://checkout-test.adyen.com/v71',
  },
})
