import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Orders-API/1.0/openapi.yaml',
  output: './src/orders-api/routes.ts',
  template: {},
  type: { output: './src/orders-api/types.ts' },
  client: { output: './src/orders-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/orders-api/rpc.ts', parseResponse: true },
  swr: { output: './src/orders-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/orders-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orders-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/orders-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/orders-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orders-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orders-api/hooks/angular-query.ts' },
  docs: {
    output: './src/orders-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
