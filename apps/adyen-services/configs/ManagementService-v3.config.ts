import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/ManagementService-v3.json',
  output: './src/ManagementService-v3/routes.ts',
  docs: {
    output: './src/ManagementService-v3/api.md',
    curl: true,
    baseUrl: 'https://management-test.adyen.com/v3',
  },
})
