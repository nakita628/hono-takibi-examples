import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/HopService-v6.json',
  output: './src/HopService-v6/routes.ts',
  docs: {
    output: './src/HopService-v6/api.md',
    curl: true,
    baseUrl: 'https://cal-test.adyen.com/cal/services/Hop/v6',
  },
})
