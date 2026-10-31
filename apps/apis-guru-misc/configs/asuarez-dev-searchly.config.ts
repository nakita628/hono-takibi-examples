import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/asuarez.dev/searchly/1.0/openapi.yaml',
  output: './src/asuarez-dev-searchly/routes.ts',
  docs: {
    output: './src/asuarez-dev-searchly/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
