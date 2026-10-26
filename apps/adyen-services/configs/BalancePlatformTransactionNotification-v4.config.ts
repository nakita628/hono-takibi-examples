import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformTransactionNotification-v4.json',
  output: './src/BalancePlatformTransactionNotification-v4/routes.ts',
  docs: {
    output: './src/BalancePlatformTransactionNotification-v4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
