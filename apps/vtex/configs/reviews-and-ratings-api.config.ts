import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Reviews-and-Ratings-API/1.0/openapi.yaml',
  output: './src/reviews-and-ratings-api/routes.ts',
  docs: {
    output: './src/reviews-and-ratings-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
