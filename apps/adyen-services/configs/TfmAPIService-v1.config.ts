import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TfmAPIService-v1.json',
  output: './src/TfmAPIService-v1/routes.ts',
  docs: {
    output: './src/TfmAPIService-v1/api.md',
    curl: true,
    baseUrl: 'https://postfmapi-test.adyen.com/postfmapi/terminal/v1',
  },
})
