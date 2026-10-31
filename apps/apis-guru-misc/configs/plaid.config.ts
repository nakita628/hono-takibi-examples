import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/plaid.com/2020-09-14_1.334.0/openapi.yaml',
  output: './src/plaid/routes.ts',
  docs: {
    output: './src/plaid/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
