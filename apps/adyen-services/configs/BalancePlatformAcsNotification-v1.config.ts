import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformAcsNotification-v1.json',
  output: './src/BalancePlatformAcsNotification-v1/routes.ts',
  docs: {
    output: './src/BalancePlatformAcsNotification-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
