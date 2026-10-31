import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/article_search/1.0.0/openapi.yaml',
  output: './src/article-search/routes.ts',
  docs: {
    output: './src/article-search/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
