import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudsearch/v1/openapi.yaml',
  output: './src/cloudsearch/routes.ts',
  docs: {
    output: './src/cloudsearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
