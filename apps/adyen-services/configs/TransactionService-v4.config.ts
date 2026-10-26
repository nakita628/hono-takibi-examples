import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TransactionService-v4.json',
  output: './src/TransactionService-v4/routes.ts',
  docs: {
    output: './src/TransactionService-v4/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-live.adyen.com/btl/api/v4',
  },
})
