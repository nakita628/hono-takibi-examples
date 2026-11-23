import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/books_api/3.0.0/openapi.yaml',
  output: './src/books-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/books-api/types.ts' },
  client: { output: './src/books-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/books-api/rpc.ts', parseResponse: true },
  swr: { output: './src/books-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/books-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/books-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/books-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/books-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/books-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/books-api/hooks/angular-query.ts' },
  docs: {
    output: './src/books-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
