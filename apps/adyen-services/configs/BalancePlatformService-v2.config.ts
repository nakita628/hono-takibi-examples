import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformService-v2.json',
  output: './src/BalancePlatformService-v2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/BalancePlatformService-v2/types.ts' },
  client: { output: './src/BalancePlatformService-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/BalancePlatformService-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/BalancePlatformService-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/BalancePlatformService-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BalancePlatformService-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/BalancePlatformService-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/BalancePlatformService-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BalancePlatformService-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BalancePlatformService-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/BalancePlatformService-v2/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/bcl/v2',
  },
})
