import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/SoftPOSConfigurationService-v3.json',
  output: './src/SoftPOSConfigurationService-v3/routes.ts',
  docs: {
    output: './src/SoftPOSConfigurationService-v3/api.md',
    curl: true,
    baseUrl: 'https://softposconfig-test.adyen.com/softposconfig/v3',
  },
})
