import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/OpenBankingService-v1.json',
  output: './src/OpenBankingService-v1/routes.ts',
  template: {},
  type: { output: './src/OpenBankingService-v1/types.ts' },
  client: { output: './src/OpenBankingService-v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/OpenBankingService-v1/rpc.ts', parseResponse: true },
  swr: { output: './src/OpenBankingService-v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/OpenBankingService-v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/OpenBankingService-v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/OpenBankingService-v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/OpenBankingService-v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/OpenBankingService-v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/OpenBankingService-v1/hooks/angular-query.ts' },
  docs: {
    output: './src/OpenBankingService-v1/api.md',
    curl: true,
    baseUrl: 'https://obgateway-test.adyen.com/obgateway/v1',
  },
})
