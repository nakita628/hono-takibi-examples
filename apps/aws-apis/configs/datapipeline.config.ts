import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/datapipeline/2012-10-29/openapi.yaml',
  output: './src/datapipeline/routes.ts',
  template: {},
  type: { output: './src/datapipeline/types.ts' },
  client: { output: './src/datapipeline/client.ts', baseUrl: '/' },
  rpc: { output: './src/datapipeline/rpc.ts', parseResponse: true },
  swr: { output: './src/datapipeline/hooks/swr.ts' },
  'tanstack-query': { output: './src/datapipeline/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datapipeline/hooks/preact-query.ts' },
  'solid-query': { output: './src/datapipeline/hooks/solid-query.ts' },
  'vue-query': { output: './src/datapipeline/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datapipeline/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datapipeline/hooks/angular-query.ts' },
  docs: {
    output: './src/datapipeline/api.md',
    curl: true,
    baseUrl: 'https://datapipeline.us-east-1.amazonaws.com',
  },
})
