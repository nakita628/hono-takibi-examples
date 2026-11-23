import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Catalog-API/1.0/openapi.yaml',
  output: './src/catalog-api/routes.ts',
  template: {},
  type: { output: './src/catalog-api/types.ts' },
  client: { output: './src/catalog-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/catalog-api/rpc.ts', parseResponse: true },
  swr: { output: './src/catalog-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/catalog-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/catalog-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/catalog-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/catalog-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/catalog-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/catalog-api/hooks/angular-query.ts' },
  docs: {
    output: './src/catalog-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
