import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/transfer/2018-11-05/openapi.yaml',
  output: './src/transfer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transfer/types.ts' },
  client: { output: './src/transfer/client.ts', baseUrl: '/' },
  rpc: { output: './src/transfer/rpc.ts', parseResponse: true },
  swr: { output: './src/transfer/hooks/swr.ts' },
  'tanstack-query': { output: './src/transfer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transfer/hooks/preact-query.ts' },
  'solid-query': { output: './src/transfer/hooks/solid-query.ts' },
  'vue-query': { output: './src/transfer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transfer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transfer/hooks/angular-query.ts' },
  docs: {
    output: './src/transfer/api.md',
    curl: true,
    baseUrl: 'https://transfer.us-east-1.amazonaws.com',
  },
})
