import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/LegalEntityService-v4.json',
  output: './src/LegalEntityService-v4/routes.ts',
  docs: {
    output: './src/LegalEntityService-v4/api.md',
    curl: true,
    baseUrl: 'https://kyc-test.adyen.com/lem/v4',
  },
})
