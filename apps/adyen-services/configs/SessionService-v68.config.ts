import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/SessionService-v68.json',
  output: './src/SessionService-v68/routes.ts',
  docs: {
    output: './src/SessionService-v68/api.md',
    curl: true,
    baseUrl: 'https://checkout-test.adyen.com/checkout/possdk/v68',
  },
})
