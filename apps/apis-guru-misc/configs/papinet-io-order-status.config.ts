import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/papinet.io/order_status/1.0.0/openapi.yaml',
  output: './src/papinet-io-order-status/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/papinet-io-order-status/types.ts' },
  client: { output: './src/papinet-io-order-status/client.ts', baseUrl: '/' },
  rpc: { output: './src/papinet-io-order-status/rpc.ts', parseResponse: true },
  swr: { output: './src/papinet-io-order-status/hooks/swr.ts' },
  'tanstack-query': { output: './src/papinet-io-order-status/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/papinet-io-order-status/hooks/preact-query.ts' },
  'solid-query': { output: './src/papinet-io-order-status/hooks/solid-query.ts' },
  'vue-query': { output: './src/papinet-io-order-status/hooks/vue-query.ts' },
  'svelte-query': { output: './src/papinet-io-order-status/hooks/svelte-query.ts' },
  'angular-query': { output: './src/papinet-io-order-status/hooks/angular-query.ts' },
  docs: {
    output: './src/papinet-io-order-status/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
