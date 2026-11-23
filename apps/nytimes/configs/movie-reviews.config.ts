import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/movie_reviews/2.0.0/openapi.yaml',
  output: './src/movie-reviews/routes.ts',
  template: {},
  type: { output: './src/movie-reviews/types.ts' },
  client: { output: './src/movie-reviews/client.ts', baseUrl: '/' },
  rpc: { output: './src/movie-reviews/rpc.ts', parseResponse: true },
  swr: { output: './src/movie-reviews/hooks/swr.ts' },
  'tanstack-query': { output: './src/movie-reviews/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/movie-reviews/hooks/preact-query.ts' },
  'solid-query': { output: './src/movie-reviews/hooks/solid-query.ts' },
  'vue-query': { output: './src/movie-reviews/hooks/vue-query.ts' },
  'svelte-query': { output: './src/movie-reviews/hooks/svelte-query.ts' },
  'angular-query': { output: './src/movie-reviews/hooks/angular-query.ts' },
  docs: {
    output: './src/movie-reviews/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
