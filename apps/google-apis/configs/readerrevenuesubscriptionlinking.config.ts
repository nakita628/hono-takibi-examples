import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/readerrevenuesubscriptionlinking/v1/openapi.yaml',
  output: './src/readerrevenuesubscriptionlinking/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/readerrevenuesubscriptionlinking/types.ts' },
  client: { output: './src/readerrevenuesubscriptionlinking/client.ts', baseUrl: '/' },
  rpc: { output: './src/readerrevenuesubscriptionlinking/rpc.ts', parseResponse: true },
  swr: { output: './src/readerrevenuesubscriptionlinking/hooks/swr.ts' },
  'tanstack-query': { output: './src/readerrevenuesubscriptionlinking/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/readerrevenuesubscriptionlinking/hooks/preact-query.ts' },
  'solid-query': { output: './src/readerrevenuesubscriptionlinking/hooks/solid-query.ts' },
  'vue-query': { output: './src/readerrevenuesubscriptionlinking/hooks/vue-query.ts' },
  'svelte-query': { output: './src/readerrevenuesubscriptionlinking/hooks/svelte-query.ts' },
  'angular-query': { output: './src/readerrevenuesubscriptionlinking/hooks/angular-query.ts' },
  docs: {
    output: './src/readerrevenuesubscriptionlinking/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
