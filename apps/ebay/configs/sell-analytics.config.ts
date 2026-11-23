import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-analytics/1.2.0/openapi.yaml',
  output: './src/sell-analytics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-analytics/types.ts' },
  client: { output: './src/sell-analytics/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-analytics/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-analytics/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-analytics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-analytics/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-analytics/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-analytics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-analytics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-analytics/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-analytics/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
