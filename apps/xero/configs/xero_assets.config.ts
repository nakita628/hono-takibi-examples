import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_assets.yaml',
  output: './src/xero_assets/routes.ts',
  docs: {
    output: './src/xero_assets/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/assets.xro/1.0',
  },
})
