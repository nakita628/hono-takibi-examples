import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Search-API/1.0/openapi.yaml',
  output: './src/search-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/search-api/types.ts' },
  client: { output: './src/search-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/search-api/rpc.ts', parseResponse: true },
  swr: { output: './src/search-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/search-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/search-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/search-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/search-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/search-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/search-api/hooks/angular-query.ts' },
  docs: {
    output: './src/search-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
