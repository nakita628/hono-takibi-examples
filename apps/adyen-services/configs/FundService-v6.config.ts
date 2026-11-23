import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/FundService-v6.json',
  output: './src/FundService-v6/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/FundService-v6/types.ts' },
  client: { output: './src/FundService-v6/client.ts', baseUrl: '/' },
  rpc: { output: './src/FundService-v6/rpc.ts', parseResponse: true },
  swr: { output: './src/FundService-v6/hooks/swr.ts' },
  'tanstack-query': { output: './src/FundService-v6/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/FundService-v6/hooks/preact-query.ts' },
  'solid-query': { output: './src/FundService-v6/hooks/solid-query.ts' },
  'vue-query': { output: './src/FundService-v6/hooks/vue-query.ts' },
  'svelte-query': { output: './src/FundService-v6/hooks/svelte-query.ts' },
  'angular-query': { output: './src/FundService-v6/hooks/angular-query.ts' },
  docs: {
    output: './src/FundService-v6/api.md',
    curl: true,
    baseUrl: 'https://cal-test.adyen.com/cal/services/Fund/v6',
  },
})
