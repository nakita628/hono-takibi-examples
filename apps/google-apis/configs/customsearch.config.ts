import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/customsearch/v1/openapi.yaml',
  output: './src/customsearch/routes.ts',
  docs: {
    output: './src/customsearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
