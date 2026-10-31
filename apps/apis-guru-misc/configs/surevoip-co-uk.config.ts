import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/surevoip.co.uk/9dcb0dc8/openapi.yaml',
  output: './src/surevoip-co-uk/routes.ts',
  docs: {
    output: './src/surevoip-co-uk/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
