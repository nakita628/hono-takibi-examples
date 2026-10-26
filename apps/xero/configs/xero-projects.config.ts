import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/XeroAPI/Xero-OpenAPI/master/xero-projects.yaml',
  output: './src/xero-projects/routes.ts',
  docs: {
    output: './src/xero-projects/api.md',
    curl: true,
    baseUrl: 'https://api.xero.com/projects.xro/2.0',
  },
})
