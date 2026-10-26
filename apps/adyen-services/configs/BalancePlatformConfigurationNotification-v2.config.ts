import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformConfigurationNotification-v2.json',
  output: './src/BalancePlatformConfigurationNotification-v2/routes.ts',
  docs: {
    output: './src/BalancePlatformConfigurationNotification-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
