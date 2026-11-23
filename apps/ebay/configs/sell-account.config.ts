import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-account/v1.9.0/openapi.yaml',
  output: './src/sell-account/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-account/types.ts' },
  client: { output: './src/sell-account/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-account/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-account/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-account/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-account/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-account/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-account/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-account/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-account/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-account/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
