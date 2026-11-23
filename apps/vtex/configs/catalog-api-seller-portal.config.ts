import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Catalog-API-Seller-Portal/1.0.0/openapi.yaml',
  output: './src/catalog-api-seller-portal/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/catalog-api-seller-portal/types.ts' },
  client: { output: './src/catalog-api-seller-portal/client.ts', baseUrl: '/' },
  rpc: { output: './src/catalog-api-seller-portal/rpc.ts', parseResponse: true },
  swr: { output: './src/catalog-api-seller-portal/hooks/swr.ts' },
  'tanstack-query': { output: './src/catalog-api-seller-portal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/catalog-api-seller-portal/hooks/preact-query.ts' },
  'solid-query': { output: './src/catalog-api-seller-portal/hooks/solid-query.ts' },
  'vue-query': { output: './src/catalog-api-seller-portal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/catalog-api-seller-portal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/catalog-api-seller-portal/hooks/angular-query.ts' },
  docs: {
    output: './src/catalog-api-seller-portal/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
