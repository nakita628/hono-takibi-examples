import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TransferService-v4.json',
  output: './src/TransferService-v4/routes.ts',
  docs: {
    output: './src/TransferService-v4/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/btl/v4',
  },
})
