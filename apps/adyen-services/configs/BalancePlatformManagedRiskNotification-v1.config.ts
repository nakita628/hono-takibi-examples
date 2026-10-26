import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformManagedRiskNotification-v1.json',
  output: './src/BalancePlatformManagedRiskNotification-v1/routes.ts',
  docs: {
    output: './src/BalancePlatformManagedRiskNotification-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
