import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/v2020_06_15/open-api-3/api-schema.json',
  output: './src/accounting/routes.ts',
  docs: {
    output: './src/accounting/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp',
  },
})
