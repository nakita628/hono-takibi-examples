import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/A2APaymentsService-v1.json',
  output: './src/A2APaymentsService-v1/routes.ts',
  docs: {
    output: './src/A2APaymentsService-v1/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/a2aissuer-api/v1',
  },
})
