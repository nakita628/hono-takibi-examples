import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/MarketPayNotificationService-v6.json',
  output: './src/MarketPayNotificationService-v6/routes.ts',
  docs: {
    output: './src/MarketPayNotificationService-v6/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
