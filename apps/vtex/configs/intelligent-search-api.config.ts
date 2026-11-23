import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Intelligent-Search-API/0.1.12/openapi.yaml',
  output: './src/intelligent-search-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/intelligent-search-api/types.ts' },
  client: { output: './src/intelligent-search-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/intelligent-search-api/rpc.ts', parseResponse: true },
  swr: { output: './src/intelligent-search-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/intelligent-search-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/intelligent-search-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/intelligent-search-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/intelligent-search-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/intelligent-search-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/intelligent-search-api/hooks/angular-query.ts' },
  docs: {
    output: './src/intelligent-search-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
