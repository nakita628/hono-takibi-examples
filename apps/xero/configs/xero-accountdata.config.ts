import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-accountdata.yaml',
  output: './src/xero-accountdata/routes.ts',
  docs: {
    output: './src/xero-accountdata/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/accountdata.xro/1.0',
  },
})
