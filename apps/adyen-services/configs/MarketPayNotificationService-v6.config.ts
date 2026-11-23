import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/MarketPayNotificationService-v6.json',
  output: './src/MarketPayNotificationService-v6/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/MarketPayNotificationService-v6/types.ts' },
  client: { output: './src/MarketPayNotificationService-v6/client.ts', baseUrl: '/' },
  rpc: { output: './src/MarketPayNotificationService-v6/rpc.ts', parseResponse: true },
  swr: { output: './src/MarketPayNotificationService-v6/hooks/swr.ts' },
  'tanstack-query': { output: './src/MarketPayNotificationService-v6/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/MarketPayNotificationService-v6/hooks/preact-query.ts' },
  'solid-query': { output: './src/MarketPayNotificationService-v6/hooks/solid-query.ts' },
  'vue-query': { output: './src/MarketPayNotificationService-v6/hooks/vue-query.ts' },
  'svelte-query': { output: './src/MarketPayNotificationService-v6/hooks/svelte-query.ts' },
  'angular-query': { output: './src/MarketPayNotificationService-v6/hooks/angular-query.ts' },
  docs: {
    output: './src/MarketPayNotificationService-v6/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
