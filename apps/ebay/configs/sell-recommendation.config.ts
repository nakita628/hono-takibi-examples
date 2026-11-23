import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-recommendation/1.1.0/openapi.yaml',
  output: './src/sell-recommendation/routes.ts',
  template: {},
  type: { output: './src/sell-recommendation/types.ts' },
  client: { output: './src/sell-recommendation/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-recommendation/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-recommendation/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-recommendation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-recommendation/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-recommendation/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-recommendation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-recommendation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-recommendation/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-recommendation/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
