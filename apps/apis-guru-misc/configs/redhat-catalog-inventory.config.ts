import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/redhat.com/catalog_inventory/1.0.0/openapi.yaml',
  output: './src/redhat-catalog-inventory/routes.ts',
  template: {},
  type: { output: './src/redhat-catalog-inventory/types.ts' },
  client: { output: './src/redhat-catalog-inventory/client.ts', baseUrl: '/' },
  rpc: { output: './src/redhat-catalog-inventory/rpc.ts', parseResponse: true },
  swr: { output: './src/redhat-catalog-inventory/hooks/swr.ts' },
  'tanstack-query': { output: './src/redhat-catalog-inventory/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/redhat-catalog-inventory/hooks/preact-query.ts' },
  'solid-query': { output: './src/redhat-catalog-inventory/hooks/solid-query.ts' },
  'vue-query': { output: './src/redhat-catalog-inventory/hooks/vue-query.ts' },
  'svelte-query': { output: './src/redhat-catalog-inventory/hooks/svelte-query.ts' },
  'angular-query': { output: './src/redhat-catalog-inventory/hooks/angular-query.ts' },
  docs: {
    output: './src/redhat-catalog-inventory/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
