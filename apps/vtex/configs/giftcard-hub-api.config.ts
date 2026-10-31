import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/GiftCard-Hub-API/1.0/openapi.yaml',
  output: './src/giftcard-hub-api/routes.ts',
  docs: {
    output: './src/giftcard-hub-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
