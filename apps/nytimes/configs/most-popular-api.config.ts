import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/nytimes.com/most_popular_api/2.0.0/openapi.yaml',
  output: './src/most-popular-api/routes.ts',
  template: {},
  type: { output: './src/most-popular-api/types.ts' },
  client: { output: './src/most-popular-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/most-popular-api/rpc.ts', parseResponse: true },
  swr: { output: './src/most-popular-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/most-popular-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/most-popular-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/most-popular-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/most-popular-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/most-popular-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/most-popular-api/hooks/angular-query.ts' },
  docs: {
    output: './src/most-popular-api/api.md',
    curl: true,
    baseUrl: 'https://api.nytimes.com/svc',
  },
})
