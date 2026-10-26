import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformBalanceNotification-v1.json',
  output: './src/BalancePlatformBalanceNotification-v1/routes.ts',
  docs: {
    output: './src/BalancePlatformBalanceNotification-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
