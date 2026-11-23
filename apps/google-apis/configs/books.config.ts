import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/books/v1/openapi.yaml',
  output: './src/books/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/books/types.ts' },
  client: { output: './src/books/client.ts', baseUrl: '/' },
  rpc: { output: './src/books/rpc.ts', parseResponse: true },
  swr: { output: './src/books/hooks/swr.ts' },
  'tanstack-query': { output: './src/books/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/books/hooks/preact-query.ts' },
  'solid-query': { output: './src/books/hooks/solid-query.ts' },
  'vue-query': { output: './src/books/hooks/vue-query.ts' },
  'svelte-query': { output: './src/books/hooks/svelte-query.ts' },
  'angular-query': { output: './src/books/hooks/angular-query.ts' },
  docs: {
    output: './src/books/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
