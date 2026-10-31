import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/news/1.0/openapi.yaml',
  output: './src/news/routes.ts',
  docs: {
    output: './src/news/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
