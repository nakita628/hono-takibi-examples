import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/freee/freee-api-schema/master/sm/open-api-3/api-schema.yml',
  output: './src/sm/routes.ts',
  docs: {
    output: './src/sm/api.md',
    curl: true,
    baseUrl: 'https://api.freee.co.jp/sm',
  },
})
