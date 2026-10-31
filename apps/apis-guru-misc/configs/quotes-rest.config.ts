import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/quotes.rest/3.1/openapi.yaml',
  output: './src/quotes-rest/routes.ts',
  docs: {
    output: './src/quotes-rest/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
