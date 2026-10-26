import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/iv/open-api-3/api-schema.yml',
  output: './src/iv/routes.ts',
  docs: {
    output: './src/iv/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp/iv',
  },
})
