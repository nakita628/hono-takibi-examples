import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/ForeignExchangeService-v1.json',
  output: './src/ForeignExchangeService-v1/routes.ts',
  docs: {
    output: './src/ForeignExchangeService-v1/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/fx/api/v1',
  },
})
