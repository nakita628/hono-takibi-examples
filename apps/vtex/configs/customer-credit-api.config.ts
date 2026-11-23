import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Customer-Credit-API/1.0/openapi.yaml',
  output: './src/customer-credit-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/customer-credit-api/types.ts' },
  client: { output: './src/customer-credit-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/customer-credit-api/rpc.ts', parseResponse: true },
  swr: { output: './src/customer-credit-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/customer-credit-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/customer-credit-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/customer-credit-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/customer-credit-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/customer-credit-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/customer-credit-api/hooks/angular-query.ts' },
  docs: {
    output: './src/customer-credit-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
