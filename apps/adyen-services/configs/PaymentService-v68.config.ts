import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/PaymentService-v68.json',
  output: './src/PaymentService-v68/routes.ts',
  docs: {
    output: './src/PaymentService-v68/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/Payment/v68',
  },
})
