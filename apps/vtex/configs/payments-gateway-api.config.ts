import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Payments-Gateway-API/1.0/openapi.yaml',
  output: './src/payments-gateway-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/payments-gateway-api/types.ts' },
  client: { output: './src/payments-gateway-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/payments-gateway-api/rpc.ts', parseResponse: true },
  swr: { output: './src/payments-gateway-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/payments-gateway-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/payments-gateway-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/payments-gateway-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/payments-gateway-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/payments-gateway-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/payments-gateway-api/hooks/angular-query.ts' },
  docs: {
    output: './src/payments-gateway-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
