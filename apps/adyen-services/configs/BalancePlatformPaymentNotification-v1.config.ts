import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformPaymentNotification-v1.json',
  output: './src/BalancePlatformPaymentNotification-v1/routes.ts',
  docs: {
    output: './src/BalancePlatformPaymentNotification-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
