import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tomtom.com/search/1.0.0/openapi.yaml',
  output: './src/tomtom-search/routes.ts',
  template: {},
  type: { output: './src/tomtom-search/types.ts' },
  client: { output: './src/tomtom-search/client.ts', baseUrl: '/' },
  rpc: { output: './src/tomtom-search/rpc.ts', parseResponse: true },
  swr: { output: './src/tomtom-search/hooks/swr.ts' },
  'tanstack-query': { output: './src/tomtom-search/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tomtom-search/hooks/preact-query.ts' },
  'solid-query': { output: './src/tomtom-search/hooks/solid-query.ts' },
  'vue-query': { output: './src/tomtom-search/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tomtom-search/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tomtom-search/hooks/angular-query.ts' },
  docs: {
    output: './src/tomtom-search/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
