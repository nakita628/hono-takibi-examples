import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/RecurringService-v68.json',
  output: './src/RecurringService-v68/routes.ts',
  docs: {
    output: './src/RecurringService-v68/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/Recurring/v68',
  },
})
