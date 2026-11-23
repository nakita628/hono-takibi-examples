import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/elasticmapreduce/2009-03-31/openapi.yaml',
  output: './src/elasticmapreduce/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/elasticmapreduce/types.ts' },
  client: { output: './src/elasticmapreduce/client.ts', baseUrl: '/' },
  rpc: { output: './src/elasticmapreduce/rpc.ts', parseResponse: true },
  swr: { output: './src/elasticmapreduce/hooks/swr.ts' },
  'tanstack-query': { output: './src/elasticmapreduce/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/elasticmapreduce/hooks/preact-query.ts' },
  'solid-query': { output: './src/elasticmapreduce/hooks/solid-query.ts' },
  'vue-query': { output: './src/elasticmapreduce/hooks/vue-query.ts' },
  'svelte-query': { output: './src/elasticmapreduce/hooks/svelte-query.ts' },
  'angular-query': { output: './src/elasticmapreduce/hooks/angular-query.ts' },
  docs: {
    output: './src/elasticmapreduce/api.md',
    curl: true,
    baseUrl: 'https://elasticmapreduce.us-east-1.amazonaws.com',
  },
})
