import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/DocumentCollectorService-v1.json',
  output: './src/DocumentCollectorService-v1/routes.ts',
  docs: {
    output: './src/DocumentCollectorService-v1/api.md',
    curl: true,
    baseUrl: 'https://document-collector-test.adyen.com/v1',
  },
})
