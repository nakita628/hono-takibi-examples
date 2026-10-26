import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/DisputeService-v30.json',
  output: './src/DisputeService-v30/routes.ts',
  docs: {
    output: './src/DisputeService-v30/api.md',
    curl: true,
    baseUrl: 'https://ca-test.adyen.com/ca/services/DisputeService/v30',
  },
})
