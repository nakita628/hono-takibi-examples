import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalanceControlService-v2.json',
  output: './src/BalanceControlService-v2/routes.ts',
  template: {},
  type: { output: './src/BalanceControlService-v2/types.ts' },
  client: { output: './src/BalanceControlService-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/BalanceControlService-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/BalanceControlService-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/BalanceControlService-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BalanceControlService-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/BalanceControlService-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/BalanceControlService-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BalanceControlService-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BalanceControlService-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/BalanceControlService-v2/api.md',
    curl: true,
    baseUrl: 'https://balance-control-test.adyen.com/balance-control/api/v2',
  },
})
