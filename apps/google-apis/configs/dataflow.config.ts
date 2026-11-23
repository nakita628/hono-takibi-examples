import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataflow/v1b3/openapi.yaml',
  output: './src/dataflow/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dataflow/types.ts' },
  client: { output: './src/dataflow/client.ts', baseUrl: '/' },
  rpc: { output: './src/dataflow/rpc.ts', parseResponse: true },
  swr: { output: './src/dataflow/hooks/swr.ts' },
  'tanstack-query': { output: './src/dataflow/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dataflow/hooks/preact-query.ts' },
  'solid-query': { output: './src/dataflow/hooks/solid-query.ts' },
  'vue-query': { output: './src/dataflow/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dataflow/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dataflow/hooks/angular-query.ts' },
  docs: {
    output: './src/dataflow/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
