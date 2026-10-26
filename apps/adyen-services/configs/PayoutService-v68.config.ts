import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/PayoutService-v68.json',
  output: './src/PayoutService-v68/routes.ts',
  docs: {
    output: './src/PayoutService-v68/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/Payout/v68',
  },
})
