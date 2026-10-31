import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/movie_reviews/2.0.0/openapi.yaml',
  output: './src/movie-reviews/routes.ts',
  docs: {
    output: './src/movie-reviews/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
