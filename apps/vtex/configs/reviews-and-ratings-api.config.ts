import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Reviews-and-Ratings-API/1.0/openapi.yaml',
  output: './src/reviews-and-ratings-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/reviews-and-ratings-api/types.ts' },
  client: { output: './src/reviews-and-ratings-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/reviews-and-ratings-api/rpc.ts', parseResponse: true },
  swr: { output: './src/reviews-and-ratings-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/reviews-and-ratings-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reviews-and-ratings-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/reviews-and-ratings-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/reviews-and-ratings-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reviews-and-ratings-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reviews-and-ratings-api/hooks/angular-query.ts' },
  docs: {
    output: './src/reviews-and-ratings-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
