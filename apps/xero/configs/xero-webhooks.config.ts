import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-webhooks.yaml',
  output: './src/xero-webhooks/routes.ts',
  docs: {
    output: './src/xero-webhooks/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com',
  },
})
