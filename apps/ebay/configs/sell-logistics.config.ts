import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/ebay.com/sell-logistics/v1_beta.0.0/openapi.yaml',
  output: './src/sell-logistics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sell-logistics/types.ts' },
  client: { output: './src/sell-logistics/client.ts', baseUrl: '/' },
  rpc: { output: './src/sell-logistics/rpc.ts', parseResponse: true },
  swr: { output: './src/sell-logistics/hooks/swr.ts' },
  'tanstack-query': { output: './src/sell-logistics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sell-logistics/hooks/preact-query.ts' },
  'solid-query': { output: './src/sell-logistics/hooks/solid-query.ts' },
  'vue-query': { output: './src/sell-logistics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sell-logistics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sell-logistics/hooks/angular-query.ts' },
  docs: {
    output: './src/sell-logistics/api.md',
    curl: true,
    baseUrl: 'https://api.ebay.com',
  },
})
