import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/RaiseDisputesService-v4.json',
  output: './src/RaiseDisputesService-v4/routes.ts',
  docs: {
    output: './src/RaiseDisputesService-v4/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/btl/api/v4',
  },
})
