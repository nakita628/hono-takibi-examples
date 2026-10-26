import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BinLookupService-v54.json',
  output: './src/BinLookupService-v54/routes.ts',
  docs: {
    output: './src/BinLookupService-v54/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/BinLookup/v54',
  },
})
