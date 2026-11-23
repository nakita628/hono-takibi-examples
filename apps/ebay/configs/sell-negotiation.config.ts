import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-negotiation/v1.1.0/openapi.yaml',
  output: './src/sell-negotiation/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-negotiation/types.ts' },
  client: { output: './src/sell-negotiation/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-negotiation/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-negotiation/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-negotiation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-negotiation/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-negotiation/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-negotiation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-negotiation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-negotiation/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-negotiation/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
