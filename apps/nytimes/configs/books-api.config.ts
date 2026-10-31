import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/books_api/3.0.0/openapi.yaml',
  output: './src/books-api/routes.ts',
  docs: {
    output: './src/books-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
