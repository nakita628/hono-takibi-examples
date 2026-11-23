import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/archive.org/search/1.0.0/openapi.yaml',
  output: './src/archive-org-search/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/archive-org-search/types.ts' },
  client: { output: './src/archive-org-search/client.ts', baseUrl: '/' },
  rpc: { output: './src/archive-org-search/rpc.ts', parseResponse: true },
  swr: { output: './src/archive-org-search/hooks/swr.ts' },
  'tanstack-query': { output: './src/archive-org-search/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/archive-org-search/hooks/preact-query.ts' },
  'solid-query': { output: './src/archive-org-search/hooks/solid-query.ts' },
  'vue-query': { output: './src/archive-org-search/hooks/vue-query.ts' },
  'svelte-query': { output: './src/archive-org-search/hooks/svelte-query.ts' },
  'angular-query': { output: './src/archive-org-search/hooks/angular-query.ts' },
  docs: {
    output: './src/archive-org-search/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
