import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/RecurringService-v68.json',
  output: './src/RecurringService-v68/routes.ts',
  template: {},
  type: { output: './src/RecurringService-v68/types.ts' },
  client: { output: './src/RecurringService-v68/client.ts', baseUrl: '/' },
  rpc: { output: './src/RecurringService-v68/rpc.ts', parseResponse: true },
  swr: { output: './src/RecurringService-v68/hooks/swr.ts' },
  'tanstack-query': { output: './src/RecurringService-v68/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/RecurringService-v68/hooks/preact-query.ts' },
  'solid-query': { output: './src/RecurringService-v68/hooks/solid-query.ts' },
  'vue-query': { output: './src/RecurringService-v68/hooks/vue-query.ts' },
  'svelte-query': { output: './src/RecurringService-v68/hooks/svelte-query.ts' },
  'angular-query': { output: './src/RecurringService-v68/hooks/angular-query.ts' },
  docs: {
    output: './src/RecurringService-v68/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/Recurring/v68',
  },
})
