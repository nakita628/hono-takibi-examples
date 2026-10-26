import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-uk.yaml',
  output: './src/xero-payroll-uk/routes.ts',
  docs: {
    output: './src/xero-payroll-uk/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/payroll.xro/2.0',
  },
})
