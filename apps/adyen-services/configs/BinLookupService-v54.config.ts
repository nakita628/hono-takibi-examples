import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BinLookupService-v54.json',
  output: './src/BinLookupService-v54/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/BinLookupService-v54/types.ts' },
  client: { output: './src/BinLookupService-v54/client.ts', baseUrl: '/' },
  rpc: { output: './src/BinLookupService-v54/rpc.ts', parseResponse: true },
  swr: { output: './src/BinLookupService-v54/hooks/swr.ts' },
  'tanstack-query': { output: './src/BinLookupService-v54/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BinLookupService-v54/hooks/preact-query.ts' },
  'solid-query': { output: './src/BinLookupService-v54/hooks/solid-query.ts' },
  'vue-query': { output: './src/BinLookupService-v54/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BinLookupService-v54/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BinLookupService-v54/hooks/angular-query.ts' },
  docs: {
    output: './src/BinLookupService-v54/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/BinLookup/v54',
  },
})
