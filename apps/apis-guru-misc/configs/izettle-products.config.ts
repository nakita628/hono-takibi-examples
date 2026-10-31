import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/izettle.com/products/1.0.0/openapi.yaml',
  output: './src/izettle-products/routes.ts',
  docs: {
    output: './src/izettle-products/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
