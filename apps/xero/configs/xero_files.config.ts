import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero_files.yaml',
  output: './src/xero_files/routes.ts',
  docs: {
    output: './src/xero_files/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/files.xro/1.0/',
  },
})
