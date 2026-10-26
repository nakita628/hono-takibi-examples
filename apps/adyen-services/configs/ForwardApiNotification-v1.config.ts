import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/ForwardApiNotification-v1.json',
  output: './src/ForwardApiNotification-v1/routes.ts',
  docs: {
    output: './src/ForwardApiNotification-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
