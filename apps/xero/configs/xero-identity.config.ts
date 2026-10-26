import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-identity.yaml',
  output: './src/xero-identity/routes.ts',
  docs: {
    output: './src/xero-identity/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com',
  },
})
