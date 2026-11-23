import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/NotificationConfigurationService-v6.json',
  output: './src/NotificationConfigurationService-v6/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/NotificationConfigurationService-v6/types.ts' },
  client: { output: './src/NotificationConfigurationService-v6/client.ts', baseUrl: '/' },
  rpc: { output: './src/NotificationConfigurationService-v6/rpc.ts', parseResponse: true },
  swr: { output: './src/NotificationConfigurationService-v6/hooks/swr.ts' },
  'tanstack-query': { output: './src/NotificationConfigurationService-v6/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/NotificationConfigurationService-v6/hooks/preact-query.ts' },
  'solid-query': { output: './src/NotificationConfigurationService-v6/hooks/solid-query.ts' },
  'vue-query': { output: './src/NotificationConfigurationService-v6/hooks/vue-query.ts' },
  'svelte-query': { output: './src/NotificationConfigurationService-v6/hooks/svelte-query.ts' },
  'angular-query': { output: './src/NotificationConfigurationService-v6/hooks/angular-query.ts' },
  docs: {
    output: './src/NotificationConfigurationService-v6/api.md',
    curl: true,
    baseUrl: 'https://cal-test.adyen.com/cal/services/Notification/v6',
  },
})
