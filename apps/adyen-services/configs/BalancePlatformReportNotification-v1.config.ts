import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/BalancePlatformReportNotification-v1.json',
  output: './src/BalancePlatformReportNotification-v1/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/BalancePlatformReportNotification-v1/types.ts' },
  client: { output: './src/BalancePlatformReportNotification-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/BalancePlatformReportNotification-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/BalancePlatformReportNotification-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/BalancePlatformReportNotification-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/BalancePlatformReportNotification-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/BalancePlatformReportNotification-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/BalancePlatformReportNotification-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/BalancePlatformReportNotification-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/BalancePlatformReportNotification-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/BalancePlatformReportNotification-v1/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
