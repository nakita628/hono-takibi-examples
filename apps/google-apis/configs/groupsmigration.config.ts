import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/groupsmigration/v1/openapi.yaml',
  output: './src/groupsmigration/routes.ts',
  docs: {
    output: './src/groupsmigration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
