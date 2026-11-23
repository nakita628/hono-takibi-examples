import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-compliance/1.4.1/openapi.yaml',
  output: './src/sell-compliance/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-compliance/types.ts' },
  client: { output: './src/sell-compliance/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-compliance/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-compliance/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-compliance/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-compliance/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-compliance/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-compliance/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-compliance/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-compliance/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-compliance/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
