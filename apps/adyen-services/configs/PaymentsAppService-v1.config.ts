import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/PaymentsAppService-v1.json',
  output: './src/PaymentsAppService-v1/routes.ts',
  docs: {
    output: './src/PaymentsAppService-v1/api.md',
    curl: true,
    baseUrl: 'https://management-live.adyen.com/v1',
  },
})
