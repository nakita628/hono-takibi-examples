import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/meilisearch.com/1.0.0/openapi.yaml',
  output: './src/meilisearch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/meilisearch/types.ts' },
  client: { output: './src/meilisearch/client.ts', baseUrl: '/' },
  rpc: { output: './src/meilisearch/rpc.ts', parseResponse: true },
  swr: { output: './src/meilisearch/hooks/swr.ts' },
  'tanstack-query': { output: './src/meilisearch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meilisearch/hooks/preact-query.ts' },
  'solid-query': { output: './src/meilisearch/hooks/solid-query.ts' },
  'vue-query': { output: './src/meilisearch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meilisearch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meilisearch/hooks/angular-query.ts' },
  docs: {
    output: './src/meilisearch/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
