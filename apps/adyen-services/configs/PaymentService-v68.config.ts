import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/Adyen/adyen-openapi/main/json/PaymentService-v68.json',
  output: './src/PaymentService-v68/routes.ts',
  template: {},
  type: { output: './src/PaymentService-v68/types.ts' },
  client: { output: './src/PaymentService-v68/client.ts', baseUrl: '/' },
  rpc: { output: './src/PaymentService-v68/rpc.ts', parseResponse: true },
  swr: { output: './src/PaymentService-v68/hooks/swr.ts' },
  'tanstack-query': { output: './src/PaymentService-v68/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/PaymentService-v68/hooks/preact-query.ts' },
  'solid-query': { output: './src/PaymentService-v68/hooks/solid-query.ts' },
  'vue-query': { output: './src/PaymentService-v68/hooks/vue-query.ts' },
  'svelte-query': { output: './src/PaymentService-v68/hooks/svelte-query.ts' },
  'angular-query': { output: './src/PaymentService-v68/hooks/angular-query.ts' },
  docs: {
    output: './src/PaymentService-v68/api.md',
    curl: true,
    baseUrl: 'https://pal-test.adyen.com/pal/servlet/Payment/v68',
  },
})
