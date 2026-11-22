import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/qldb/2019-01-02/openapi.yaml',
  output: './src/qldb/routes.ts',
  template: {},
  type: { output: './src/qldb/types.ts' },
  client: { output: './src/qldb/client.ts', baseUrl: '/' },
  rpc: { output: './src/qldb/rpc.ts', parseResponse: true },
  swr: { output: './src/qldb/hooks/swr.ts' },
  'tanstack-query': { output: './src/qldb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/qldb/hooks/preact-query.ts' },
  'solid-query': { output: './src/qldb/hooks/solid-query.ts' },
  'vue-query': { output: './src/qldb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/qldb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/qldb/hooks/angular-query.ts' },
  docs: {
    output: './src/qldb/api.md',
    curl: true,
    baseUrl: 'https://qldb.us-east-1.amazonaws.com',
  },
})
