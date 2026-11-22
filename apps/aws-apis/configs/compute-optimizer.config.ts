import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/compute-optimizer/2019-11-01/openapi.yaml',
  output: './src/compute-optimizer/routes.ts',
  template: {},
  type: { output: './src/compute-optimizer/types.ts' },
  client: { output: './src/compute-optimizer/client.ts', baseUrl: '/' },
  rpc: { output: './src/compute-optimizer/rpc.ts', parseResponse: true },
  swr: { output: './src/compute-optimizer/hooks/swr.ts' },
  'tanstack-query': { output: './src/compute-optimizer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/compute-optimizer/hooks/preact-query.ts' },
  'solid-query': { output: './src/compute-optimizer/hooks/solid-query.ts' },
  'vue-query': { output: './src/compute-optimizer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/compute-optimizer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/compute-optimizer/hooks/angular-query.ts' },
  docs: {
    output: './src/compute-optimizer/api.md',
    curl: true,
    baseUrl: 'https://compute-optimizer.us-east-1.amazonaws.com',
  },
})
