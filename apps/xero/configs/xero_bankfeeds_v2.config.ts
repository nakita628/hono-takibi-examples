import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_bankfeeds_v2.yaml',
  output: './src/xero_bankfeeds_v2/routes.ts',
  docs: {
    output: './src/xero_bankfeeds_v2/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/bankfeeds.xro/2.0',
  },
})
