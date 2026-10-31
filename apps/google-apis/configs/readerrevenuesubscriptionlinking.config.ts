import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/readerrevenuesubscriptionlinking/v1/openapi.yaml',
  output: './src/readerrevenuesubscriptionlinking/routes.ts',
  docs: {
    output: './src/readerrevenuesubscriptionlinking/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
