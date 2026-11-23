import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/etmdb.com/1.0.0/openapi.yaml',
  output: './src/etmdb/routes.ts',
  template: {},
  type: { output: './src/etmdb/types.ts' },
  client: { output: './src/etmdb/client.ts', baseUrl: '/' },
  rpc: { output: './src/etmdb/rpc.ts', parseResponse: true },
  swr: { output: './src/etmdb/hooks/swr.ts' },
  'tanstack-query': { output: './src/etmdb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/etmdb/hooks/preact-query.ts' },
  'solid-query': { output: './src/etmdb/hooks/solid-query.ts' },
  'vue-query': { output: './src/etmdb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/etmdb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/etmdb/hooks/angular-query.ts' },
  docs: {
    output: './src/etmdb/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
