import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/ManagementNotificationService-v3.json',
  output: './src/ManagementNotificationService-v3/routes.ts',
  docs: {
    output: './src/ManagementNotificationService-v3/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
