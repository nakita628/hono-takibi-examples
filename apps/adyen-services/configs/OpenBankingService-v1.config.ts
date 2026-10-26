import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/OpenBankingService-v1.json',
  output: './src/OpenBankingService-v1/routes.ts',
  docs: {
    output: './src/OpenBankingService-v1/api.md',
    curl: true,
    baseUrl: 'https://obgateway-test.adyen.com/obgateway/v1',
  },
})
