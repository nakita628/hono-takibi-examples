import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/FundService-v6.json',
  output: './src/FundService-v6/routes.ts',
  docs: {
    output: './src/FundService-v6/api.md',
    curl: true,
    baseUrl: 'https://cal-test.adyen.com/cal/services/Fund/v6',
  },
})
