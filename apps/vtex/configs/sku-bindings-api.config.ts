import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/SKU-Bindings-API/1.0/openapi.yaml',
  output: './src/sku-bindings-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/sku-bindings-api/types.ts' },
  client: { output: './src/sku-bindings-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/sku-bindings-api/rpc.ts', parseResponse: true },
  swr: { output: './src/sku-bindings-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/sku-bindings-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sku-bindings-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/sku-bindings-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/sku-bindings-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sku-bindings-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sku-bindings-api/hooks/angular-query.ts' },
  docs: {
    output: './src/sku-bindings-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
