import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/sdb/2009-04-15/openapi.yaml',
  output: './src/sdb/routes.ts',
  template: {},
  type: { output: './src/sdb/types.ts' },
  client: { output: './src/sdb/client.ts', baseUrl: '/' },
  rpc: { output: './src/sdb/rpc.ts', parseResponse: true },
  swr: { output: './src/sdb/hooks/swr.ts' },
  'tanstack-query': { output: './src/sdb/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/sdb/hooks/preact-query.ts' },
  'solid-query': { output: './src/sdb/hooks/solid-query.ts' },
  'vue-query': { output: './src/sdb/hooks/vue-query.ts' },
  'svelte-query': { output: './src/sdb/hooks/svelte-query.ts' },
  'angular-query': { output: './src/sdb/hooks/angular-query.ts' },
  docs: {
    output: './src/sdb/api.md',
    curl: true,
    baseUrl: 'https://sdb.us-east-1.amazonaws.com',
  },
})
