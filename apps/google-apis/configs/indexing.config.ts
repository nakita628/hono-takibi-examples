import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/indexing/v3/openapi.yaml',
  output: './src/indexing/routes.ts',
  docs: {
    output: './src/indexing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
