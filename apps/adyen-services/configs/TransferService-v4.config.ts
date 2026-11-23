import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/TransferService-v4.json',
  output: './src/TransferService-v4/routes.ts',
  template: {},
  type: { output: './src/TransferService-v4/types.ts' },
  client: { output: './src/TransferService-v4/client.ts', baseUrl: '/' },
  rpc: { output: './src/TransferService-v4/rpc.ts', parseResponse: true },
  swr: { output: './src/TransferService-v4/hooks/swr.ts' },
  'tanstack-query': { output: './src/TransferService-v4/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/TransferService-v4/hooks/preact-query.ts' },
  'solid-query': { output: './src/TransferService-v4/hooks/solid-query.ts' },
  'vue-query': { output: './src/TransferService-v4/hooks/vue-query.ts' },
  'svelte-query': { output: './src/TransferService-v4/hooks/svelte-query.ts' },
  'angular-query': { output: './src/TransferService-v4/hooks/angular-query.ts' },
  docs: {
    output: './src/TransferService-v4/api.md',
    curl: true,
    baseUrl: 'https://balanceplatform-api-test.adyen.com/btl/v4',
  },
})
