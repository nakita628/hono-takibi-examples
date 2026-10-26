import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-app-store.yaml',
  output: './src/xero-app-store/routes.ts',
  docs: {
    output: './src/xero-app-store/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/appstore/2.0',
  },
})
