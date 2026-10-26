import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // plaid/plaid-openapi
  input: 'https://raw.githubusercontent.com/plaid/plaid-openapi/master/2020-09-14.yml',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
