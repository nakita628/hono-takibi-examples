import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_accounting.yaml',
  output: './src/xero_accounting/routes.ts',
  docs: {
    output: './src/xero_accounting/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/api.xro/2.0',
  },
})
