import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/DataProtectionService-v1.json',
  output: './src/DataProtectionService-v1/routes.ts',
  docs: {
    output: './src/DataProtectionService-v1/api.md',
    curl: true,
    baseUrl: 'https://ca-test.adyen.com/ca/services/DataProtectionService/v1',
  },
})
