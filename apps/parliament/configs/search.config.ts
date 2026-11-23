import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/search/Live/openapi.yaml',
  output: './src/search/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/search/types.ts' },
  client: { output: './src/search/client.ts', baseUrl: '/' },
  rpc: { output: './src/search/rpc.ts', parseResponse: true },
  swr: { output: './src/search/hooks/swr.ts' },
  'tanstack-query': { output: './src/search/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/search/hooks/preact-query.ts' },
  'solid-query': { output: './src/search/hooks/solid-query.ts' },
  'vue-query': { output: './src/search/hooks/vue-query.ts' },
  'svelte-query': { output: './src/search/hooks/svelte-query.ts' },
  'angular-query': { output: './src/search/hooks/angular-query.ts' },
  docs: {
    output: './src/search/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
