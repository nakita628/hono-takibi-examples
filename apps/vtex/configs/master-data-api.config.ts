import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Master-Data-API-/1.0/openapi.yaml',
  output: './src/master-data-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/master-data-api/types.ts' },
  client: { output: './src/master-data-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/master-data-api/rpc.ts', parseResponse: true },
  swr: { output: './src/master-data-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/master-data-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/master-data-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/master-data-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/master-data-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/master-data-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/master-data-api/hooks/angular-query.ts' },
  docs: {
    output: './src/master-data-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
