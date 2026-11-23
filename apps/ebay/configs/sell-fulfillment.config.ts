import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-fulfillment/v1.20.0/openapi.yaml',
  output: './src/sell-fulfillment/routes.ts',
  template: {},
  type: { output: './src/sell-fulfillment/types.ts' },
  client: { output: './src/sell-fulfillment/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-fulfillment/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-fulfillment/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-fulfillment/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-fulfillment/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-fulfillment/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-fulfillment/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-fulfillment/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-fulfillment/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-fulfillment/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
