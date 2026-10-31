import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apideck.com/ecommerce/9.3.0/openapi.yaml',
  output: './src/ecommerce/routes.ts',
  docs: {
    output: './src/ecommerce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
