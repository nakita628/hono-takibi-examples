import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-finance.yaml',
  output: './src/xero-finance/routes.ts',
  docs: {
    output: './src/xero-finance/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/finance.xro/1.0',
  },
})
