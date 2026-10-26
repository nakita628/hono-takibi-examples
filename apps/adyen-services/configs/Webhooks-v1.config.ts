import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/Webhooks-v1.json',
  output: './src/Webhooks-v1/routes.ts',
  docs: {
    output: './src/Webhooks-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
