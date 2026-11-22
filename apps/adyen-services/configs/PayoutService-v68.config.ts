import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/PayoutService-v68.json',
  output: './src/PayoutService-v68/routes.ts',
  template: {},
  type: { output: './src/PayoutService-v68/types.ts' },
  client: { output: './src/PayoutService-v68/client.ts', baseUrl: '/' },
  rpc: { output: './src/PayoutService-v68/rpc.ts', parseResponse: true },
  swr: { output: './src/PayoutService-v68/hooks/swr.ts' },
  'tanstack-query': { output: './src/PayoutService-v68/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/PayoutService-v68/hooks/preact-query.ts' },
  'solid-query': { output: './src/PayoutService-v68/hooks/solid-query.ts' },
  'vue-query': { output: './src/PayoutService-v68/hooks/vue-query.ts' },
  'svelte-query': { output: './src/PayoutService-v68/hooks/svelte-query.ts' },
  'angular-query': { output: './src/PayoutService-v68/hooks/angular-query.ts' },
  docs: {
    output: './src/PayoutService-v68/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/Payout/v68',
  },
})
