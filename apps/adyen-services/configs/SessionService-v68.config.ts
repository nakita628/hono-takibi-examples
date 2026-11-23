import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/SessionService-v68.json',
  output: './src/SessionService-v68/routes.ts',
  template: {},
  type: { output: './src/SessionService-v68/types.ts' },
  client: { output: './src/SessionService-v68/client.ts', baseUrl: '/' },
  rpc: { output: './src/SessionService-v68/rpc.ts', parseResponse: true },
  swr: { output: './src/SessionService-v68/hooks/swr.ts' },
  'tanstack-query': { output: './src/SessionService-v68/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/SessionService-v68/hooks/preact-query.ts' },
  'solid-query': { output: './src/SessionService-v68/hooks/solid-query.ts' },
  'vue-query': { output: './src/SessionService-v68/hooks/vue-query.ts' },
  'svelte-query': { output: './src/SessionService-v68/hooks/svelte-query.ts' },
  'angular-query': { output: './src/SessionService-v68/hooks/angular-query.ts' },
  docs: {
    output: './src/SessionService-v68/api.md',
    curl: true,
    baseUrl: 'https://checkout-test.adyen.com/checkout/possdk/v68',
  },
})
