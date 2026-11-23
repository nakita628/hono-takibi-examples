import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformConfigurationNotification-v2.json',
  output: './src/BalancePlatformConfigurationNotification-v2/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/BalancePlatformConfigurationNotification-v2/types.ts' },
  client: { output: './src/BalancePlatformConfigurationNotification-v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/BalancePlatformConfigurationNotification-v2/rpc.ts', parseResponse: true },
  swr: { output: './src/BalancePlatformConfigurationNotification-v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/BalancePlatformConfigurationNotification-v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BalancePlatformConfigurationNotification-v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/BalancePlatformConfigurationNotification-v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/BalancePlatformConfigurationNotification-v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BalancePlatformConfigurationNotification-v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BalancePlatformConfigurationNotification-v2/hooks/angular-query.ts' },
  docs: {
    output: './src/BalancePlatformConfigurationNotification-v2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
