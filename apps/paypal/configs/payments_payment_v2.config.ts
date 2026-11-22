import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/payments_payment_v2.json',
  output: './src/payments_payment_v2/routes.ts',
  template: {},
  type: { output: './src/payments_payment_v2/types.ts' },
  client: { output: './src/payments_payment_v2/client.ts', baseUrl: '/' },
  rpc: { output: './src/payments_payment_v2/rpc.ts', parseResponse: true },
  swr: { output: './src/payments_payment_v2/hooks/swr.ts' },
  'tanstack-query': { output: './src/payments_payment_v2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/payments_payment_v2/hooks/preact-query.ts' },
  'solid-query': { output: './src/payments_payment_v2/hooks/solid-query.ts' },
  'vue-query': { output: './src/payments_payment_v2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/payments_payment_v2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/payments_payment_v2/hooks/angular-query.ts' },
  docs: {
    output: './src/payments_payment_v2/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
