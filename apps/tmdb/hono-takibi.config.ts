import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://developer.themoviedb.org/openapi/tmdb-api.json',
  output: './src/routes.ts',
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'https://api.themoviedb.org',
  },
})
