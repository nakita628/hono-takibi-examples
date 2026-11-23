import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/CheckoutService-v72.json',
  output: './src/CheckoutService-v72/routes.ts',
  template: {},
  type: { output: './src/CheckoutService-v72/types.ts' },
  client: { output: './src/CheckoutService-v72/client.ts', baseUrl: '/' },
  rpc: { output: './src/CheckoutService-v72/rpc.ts', parseResponse: true },
  swr: { output: './src/CheckoutService-v72/hooks/swr.ts' },
  'tanstack-query': { output: './src/CheckoutService-v72/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/CheckoutService-v72/hooks/preact-query.ts' },
  'solid-query': { output: './src/CheckoutService-v72/hooks/solid-query.ts' },
  'vue-query': { output: './src/CheckoutService-v72/hooks/vue-query.ts' },
  'svelte-query': { output: './src/CheckoutService-v72/hooks/svelte-query.ts' },
  'angular-query': { output: './src/CheckoutService-v72/hooks/angular-query.ts' },
  docs: {
    output: './src/CheckoutService-v72/api.md',
    curl: true,
    baseUrl: 'https://checkout-test.adyen.com/v72',
  },
})
