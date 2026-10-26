import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CapitalService-v1.json',
  output: './src/CapitalService-v1/routes.ts',
  docs: {
    output: './src/CapitalService-v1/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/capital/v1',
  },
})
