import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/managedblockchain/2018-09-24/openapi.yaml',
  output: './src/managedblockchain/routes.ts',
  template: {},
  type: { output: './src/managedblockchain/types.ts' },
  client: { output: './src/managedblockchain/client.ts', baseUrl: '/' },
  rpc: { output: './src/managedblockchain/rpc.ts', parseResponse: true },
  swr: { output: './src/managedblockchain/hooks/swr.ts' },
  'tanstack-query': { output: './src/managedblockchain/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/managedblockchain/hooks/preact-query.ts' },
  'solid-query': { output: './src/managedblockchain/hooks/solid-query.ts' },
  'vue-query': { output: './src/managedblockchain/hooks/vue-query.ts' },
  'svelte-query': { output: './src/managedblockchain/hooks/svelte-query.ts' },
  'angular-query': { output: './src/managedblockchain/hooks/angular-query.ts' },
  docs: {
    output: './src/managedblockchain/api.md',
    curl: true,
    baseUrl: 'https://managedblockchain.us-east-1.amazonaws.com',
  },
})
