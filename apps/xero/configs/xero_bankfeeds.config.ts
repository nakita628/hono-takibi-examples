import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_bankfeeds.yaml',
  output: './src/xero_bankfeeds/routes.ts',
  docs: {
    output: './src/xero_bankfeeds/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/bankfeeds.xro/1.0',
  },
})
