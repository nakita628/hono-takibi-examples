import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/paypal/paypal-rest-api-specifications/main/openapi/reporting_transactions_v1.json',
  output: './src/reporting_transactions_v1/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/reporting_transactions_v1/types.ts' },
  client: { output: './src/reporting_transactions_v1/client.ts', baseUrl: '/' },
  rpc: { output: './src/reporting_transactions_v1/rpc.ts', parseResponse: true },
  swr: { output: './src/reporting_transactions_v1/hooks/swr.ts' },
  'tanstack-query': { output: './src/reporting_transactions_v1/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reporting_transactions_v1/hooks/preact-query.ts' },
  'solid-query': { output: './src/reporting_transactions_v1/hooks/solid-query.ts' },
  'vue-query': { output: './src/reporting_transactions_v1/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reporting_transactions_v1/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reporting_transactions_v1/hooks/angular-query.ts' },
  docs: {
    output: './src/reporting_transactions_v1/api.md',
    curl: true,
    baseUrl: 'https://api-m.paypal.com',
  },
})
