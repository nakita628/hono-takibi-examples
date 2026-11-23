import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/quotes.rest/3.1/openapi.yaml',
  output: './src/quotes-rest/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/quotes-rest/types.ts' },
  client: { output: './src/quotes-rest/client.ts', baseUrl: '/' },
  rpc: { output: './src/quotes-rest/rpc.ts', parseResponse: true },
  swr: { output: './src/quotes-rest/hooks/swr.ts' },
  'tanstack-query': { output: './src/quotes-rest/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/quotes-rest/hooks/preact-query.ts' },
  'solid-query': { output: './src/quotes-rest/hooks/solid-query.ts' },
  'vue-query': { output: './src/quotes-rest/hooks/vue-query.ts' },
  'svelte-query': { output: './src/quotes-rest/hooks/svelte-query.ts' },
  'angular-query': { output: './src/quotes-rest/hooks/angular-query.ts' },
  docs: {
    output: './src/quotes-rest/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
