import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalanceControlService-v2.json',
  output: './src/BalanceControlService-v2/routes.ts',
  docs: {
    output: './src/BalanceControlService-v2/api.md',
    curl: true,
    baseUrl: 'https://balance-control-test.adyen.com/balance-control/api/v2',
  },
})
