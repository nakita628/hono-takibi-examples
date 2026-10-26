import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/StoredValueService-v46.json',
  output: './src/StoredValueService-v46/routes.ts',
  docs: {
    output: './src/StoredValueService-v46/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/StoredValue/v46',
  },
})
