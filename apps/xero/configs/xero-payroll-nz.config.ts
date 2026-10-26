import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-payroll-nz.yaml',
  output: './src/xero-payroll-nz/routes.ts',
  docs: {
    output: './src/xero-payroll-nz/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/payroll.xro/2.0',
  },
})
