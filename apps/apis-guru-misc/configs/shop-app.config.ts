import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shop.app/v1/openapi.yaml',
  output: './src/shop-app/routes.ts',
  docs: {
    output: './src/shop-app/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
