import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/buy-deal/v1.3.0/openapi.yaml',
  output: './src/buy-deal/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/buy-deal/types.ts' },
  client: { output: './src/buy-deal/client.ts', baseUrl: '/' },
  rpc: { output: './src/buy-deal/rpc.ts', parseResponse: true },
  swr: { output: './src/buy-deal/hooks/swr.ts' },
  'tanstack-query': { output: './src/buy-deal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/buy-deal/hooks/preact-query.ts' },
  'solid-query': { output: './src/buy-deal/hooks/solid-query.ts' },
  'vue-query': { output: './src/buy-deal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/buy-deal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/buy-deal/hooks/angular-query.ts' },
  docs: {
    output: './src/buy-deal/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
