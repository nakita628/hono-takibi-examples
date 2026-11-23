import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Checkout-API/1.0/openapi.yaml',
  output: './src/checkout-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/checkout-api/types.ts' },
  client: { output: './src/checkout-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/checkout-api/rpc.ts', parseResponse: true },
  swr: { output: './src/checkout-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/checkout-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/checkout-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/checkout-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/checkout-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/checkout-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/checkout-api/hooks/angular-query.ts' },
  docs: {
    output: './src/checkout-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
