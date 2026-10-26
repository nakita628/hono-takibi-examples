import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformService-v2.json',
  output: './src/BalancePlatformService-v2/routes.ts',
  docs: {
    output: './src/BalancePlatformService-v2/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/bcl/v2',
  },
})
