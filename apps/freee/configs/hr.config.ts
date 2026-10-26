import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/hr/open-api-3/api-schema.json',
  output: './src/hr/routes.ts',
  docs: {
    output: './src/hr/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp/hr',
  },
})
