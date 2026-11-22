import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/indexing/v3/openapi.yaml',
  output: './src/indexing/routes.ts',
  template: {},
  type: { output: './src/indexing/types.ts' },
  client: { output: './src/indexing/client.ts', baseUrl: '/' },
  rpc: { output: './src/indexing/rpc.ts', parseResponse: true },
  swr: { output: './src/indexing/hooks/swr.ts' },
  'tanstack-query': { output: './src/indexing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/indexing/hooks/preact-query.ts' },
  'solid-query': { output: './src/indexing/hooks/solid-query.ts' },
  'vue-query': { output: './src/indexing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/indexing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/indexing/hooks/angular-query.ts' },
  docs: {
    output: './src/indexing/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
