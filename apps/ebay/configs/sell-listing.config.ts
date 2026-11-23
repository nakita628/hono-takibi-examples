import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-listing/v1_beta.3.0/openapi.yaml',
  output: './src/sell-listing/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-listing/types.ts' },
  client: { output: './src/sell-listing/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-listing/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-listing/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-listing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-listing/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-listing/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-listing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-listing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-listing/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-listing/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
