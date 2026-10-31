import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/storage/v1/openapi.yaml',
  output: './src/storage/routes.ts',
  docs: {
    output: './src/storage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
