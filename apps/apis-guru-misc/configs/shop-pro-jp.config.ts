import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shop-pro.jp/1.0.0/openapi.yaml',
  output: './src/shop-pro-jp/routes.ts',
  docs: {
    output: './src/shop-pro-jp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
