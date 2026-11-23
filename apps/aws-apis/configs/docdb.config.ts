import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/docdb/2014-10-31/openapi.yaml',
  output: './src/docdb/routes.ts',
  template: {},
  type: { output: './src/docdb/types.ts' },
  client: { output: './src/docdb/client.ts', baseUrl: '/' },
  rpc: { output: './src/docdb/rpc.ts', parseResponse: true },
  swr: { output: './src/docdb/hooks/swr.ts' },
  'tanstack-query': { output: './src/docdb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/docdb/hooks/preact-query.ts' },
  'solid-query': { output: './src/docdb/hooks/solid-query.ts' },
  'vue-query': { output: './src/docdb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/docdb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/docdb/hooks/angular-query.ts' },
  docs: {
    output: './src/docdb/api.md',
    curl: true,
    baseUrl: 'https://docdb.us-east-1.amazonaws.com',
  },
})
