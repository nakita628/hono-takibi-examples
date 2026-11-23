import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/codat.io/sync-for-commerce/1.1/openapi.yaml',
  output: './src/codat-io-sync-for-commerce/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/codat-io-sync-for-commerce/types.ts' },
  client: { output: './src/codat-io-sync-for-commerce/client.ts', baseUrl: '/' },
  rpc: { output: './src/codat-io-sync-for-commerce/rpc.ts', parseResponse: true },
  swr: { output: './src/codat-io-sync-for-commerce/hooks/swr.ts' },
  'tanstack-query': { output: './src/codat-io-sync-for-commerce/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/codat-io-sync-for-commerce/hooks/preact-query.ts' },
  'solid-query': { output: './src/codat-io-sync-for-commerce/hooks/solid-query.ts' },
  'vue-query': { output: './src/codat-io-sync-for-commerce/hooks/vue-query.ts' },
  'svelte-query': { output: './src/codat-io-sync-for-commerce/hooks/svelte-query.ts' },
  'angular-query': { output: './src/codat-io-sync-for-commerce/hooks/angular-query.ts' },
  docs: {
    output: './src/codat-io-sync-for-commerce/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
