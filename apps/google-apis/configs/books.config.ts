import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/books/v1/openapi.yaml',
  output: './src/books/routes.ts',
  docs: {
    output: './src/books/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
