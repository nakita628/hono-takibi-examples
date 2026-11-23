import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vocadb.net/1.0/openapi.yaml',
  output: './src/vocadb-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vocadb-net/types.ts' },
  client: { output: './src/vocadb-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/vocadb-net/rpc.ts', parseResponse: true },
  swr: { output: './src/vocadb-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/vocadb-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vocadb-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/vocadb-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/vocadb-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vocadb-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vocadb-net/hooks/angular-query.ts' },
  docs: {
    output: './src/vocadb-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
