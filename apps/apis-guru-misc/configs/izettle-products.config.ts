import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/izettle.com/products/1.0.0/openapi.yaml',
  output: './src/izettle-products/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/izettle-products/types.ts' },
  client: { output: './src/izettle-products/client.ts', baseUrl: '/' },
  rpc: { output: './src/izettle-products/rpc.ts', parseResponse: true },
  swr: { output: './src/izettle-products/hooks/swr.ts' },
  'tanstack-query': { output: './src/izettle-products/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/izettle-products/hooks/preact-query.ts' },
  'solid-query': { output: './src/izettle-products/hooks/solid-query.ts' },
  'vue-query': { output: './src/izettle-products/hooks/vue-query.ts' },
  'svelte-query': { output: './src/izettle-products/hooks/svelte-query.ts' },
  'angular-query': { output: './src/izettle-products/hooks/angular-query.ts' },
  docs: {
    output: './src/izettle-products/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
