import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformTransactionNotification-v4.json',
  output: './src/BalancePlatformTransactionNotification-v4/routes.ts',
  template: {},
  type: { output: './src/BalancePlatformTransactionNotification-v4/types.ts' },
  client: { output: './src/BalancePlatformTransactionNotification-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/BalancePlatformTransactionNotification-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/BalancePlatformTransactionNotification-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/BalancePlatformTransactionNotification-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BalancePlatformTransactionNotification-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/BalancePlatformTransactionNotification-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/BalancePlatformTransactionNotification-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BalancePlatformTransactionNotification-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BalancePlatformTransactionNotification-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/BalancePlatformTransactionNotification-v4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
