import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-au.yaml',
  output: './src/xero-payroll-au/routes.ts',
  docs: {
    output: './src/xero-payroll-au/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/payroll.xro/1.0',
  },
})
