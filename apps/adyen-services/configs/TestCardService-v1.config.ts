import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TestCardService-v1.json',
  output: './src/TestCardService-v1/routes.ts',
  docs: {
    output: './src/TestCardService-v1/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/services/TestCard/v1',
  },
})
