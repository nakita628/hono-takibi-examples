import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TransactionService-v4.json',
  output: './src/TransactionService-v4/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/TransactionService-v4/types.ts' },
  client: { output: './src/TransactionService-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/TransactionService-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/TransactionService-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/TransactionService-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/TransactionService-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/TransactionService-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/TransactionService-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/TransactionService-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/TransactionService-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/TransactionService-v4/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-live.adyen.com/btl/api/v4',
  },
})
