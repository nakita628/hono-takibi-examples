import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datapipelines/v1/openapi.yaml',
  output: './src/datapipelines/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/datapipelines/types.ts' },
  client: { output: './src/datapipelines/client.ts', baseUrl: '/' },
  rpc: { output: './src/datapipelines/rpc.ts', parseResponse: true },
  swr: { output: './src/datapipelines/hooks/swr.ts' },
  'tanstack-query': { output: './src/datapipelines/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datapipelines/hooks/preact-query.ts' },
  'solid-query': { output: './src/datapipelines/hooks/solid-query.ts' },
  'vue-query': { output: './src/datapipelines/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datapipelines/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datapipelines/hooks/angular-query.ts' },
  docs: {
    output: './src/datapipelines/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
