import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Promotions-/1.0/openapi.yaml',
  output: './src/promotions/routes.ts',
  docs: {
    output: './src/promotions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
