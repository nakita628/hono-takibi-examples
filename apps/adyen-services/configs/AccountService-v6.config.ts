import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/AccountService-v6.json',
  output: './src/AccountService-v6/routes.ts',
  docs: {
    output: './src/AccountService-v6/api.md',
    curl: true,
    baseUrl: 'https://cal-test.adyen.com/cal/services/Account/v6',
  },
})
