import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shorten.rest/1.0.0/openapi.yaml',
  output: './src/shorten-rest/routes.ts',
  docs: {
    output: './src/shorten-rest/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
