import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/NotificationConfigurationService-v6.json',
  output: './src/NotificationConfigurationService-v6/routes.ts',
  docs: {
    output: './src/NotificationConfigurationService-v6/api.md',
    curl: true,
    baseUrl: 'https://cal-test.adyen.com/cal/services/Notification/v6',
  },
})
