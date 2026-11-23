import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/timestream-query/2018-11-01/openapi.yaml',
  output: './src/timestream-query/routes.ts',
  template: {},
  type: { output: './src/timestream-query/types.ts' },
  client: { output: './src/timestream-query/client.ts', baseUrl: '/' },
  rpc: { output: './src/timestream-query/rpc.ts', parseResponse: true },
  swr: { output: './src/timestream-query/hooks/swr.ts' },
  'tanstack-query': { output: './src/timestream-query/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/timestream-query/hooks/preact-query.ts' },
  'solid-query': { output: './src/timestream-query/hooks/solid-query.ts' },
  'vue-query': { output: './src/timestream-query/hooks/vue-query.ts' },
  'svelte-query': { output: './src/timestream-query/hooks/svelte-query.ts' },
  'angular-query': { output: './src/timestream-query/hooks/angular-query.ts' },
  docs: {
    output: './src/timestream-query/api.md',
    curl: true,
    baseUrl: 'https://timestream-query.us-east-1.amazonaws.com',
  },
})
