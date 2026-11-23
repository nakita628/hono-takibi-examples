import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/MasterData-API-/1.0/openapi.yaml',
  output: './src/masterdata-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/masterdata-api/types.ts' },
  client: { output: './src/masterdata-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/masterdata-api/rpc.ts', parseResponse: true },
  swr: { output: './src/masterdata-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/masterdata-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/masterdata-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/masterdata-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/masterdata-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/masterdata-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/masterdata-api/hooks/angular-query.ts' },
  docs: {
    output: './src/masterdata-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
