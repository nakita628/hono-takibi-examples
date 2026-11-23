import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/RaiseDisputesService-v4.json',
  output: './src/RaiseDisputesService-v4/routes.ts',
  template: {},
  type: { output: './src/RaiseDisputesService-v4/types.ts' },
  client: { output: './src/RaiseDisputesService-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/RaiseDisputesService-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/RaiseDisputesService-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/RaiseDisputesService-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/RaiseDisputesService-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/RaiseDisputesService-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/RaiseDisputesService-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/RaiseDisputesService-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/RaiseDisputesService-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/RaiseDisputesService-v4/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/btl/api/v4',
  },
})
