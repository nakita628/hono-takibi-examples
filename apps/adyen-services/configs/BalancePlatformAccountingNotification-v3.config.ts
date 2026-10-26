import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformAccountingNotification-v3.json',
  output: './src/BalancePlatformAccountingNotification-v3/routes.ts',
  docs: {
    output: './src/BalancePlatformAccountingNotification-v3/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
