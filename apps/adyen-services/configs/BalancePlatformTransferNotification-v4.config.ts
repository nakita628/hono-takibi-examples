import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformTransferNotification-v4.json',
  output: './src/BalancePlatformTransferNotification-v4/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/BalancePlatformTransferNotification-v4/types.ts' },
  client: { output: './src/BalancePlatformTransferNotification-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/BalancePlatformTransferNotification-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/BalancePlatformTransferNotification-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/BalancePlatformTransferNotification-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BalancePlatformTransferNotification-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/BalancePlatformTransferNotification-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/BalancePlatformTransferNotification-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BalancePlatformTransferNotification-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BalancePlatformTransferNotification-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/BalancePlatformTransferNotification-v4/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
