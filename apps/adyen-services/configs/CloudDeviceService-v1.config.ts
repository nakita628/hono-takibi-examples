import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CloudDeviceService-v1.json',
  output: './src/CloudDeviceService-v1/routes.ts',
  docs: {
    output: './src/CloudDeviceService-v1/api.md',
    curl: true,
    baseUrl: 'https://device-api-test.adyen.com/v1',
  },
})
