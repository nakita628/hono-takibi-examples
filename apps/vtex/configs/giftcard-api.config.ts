import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Giftcard-API/1.0/openapi.yaml',
  output: './src/giftcard-api/routes.ts',
  docs: {
    output: './src/giftcard-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
