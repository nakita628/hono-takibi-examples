import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformTransferNotification-v4.json',
  output: './src/BalancePlatformTransferNotification-v4/routes.ts',
  docs: {
    output: './src/BalancePlatformTransferNotification-v4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
