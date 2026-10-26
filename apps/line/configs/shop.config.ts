import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/line/line-openapi/main/shop.yml',
  output: './src/shop/routes.ts',
  docs: {
    output: './src/shop/api.md',
    curl: true,
    baseUrl: 'https://api.line.me',
  },
})
