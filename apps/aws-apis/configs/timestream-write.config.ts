import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/timestream-write/2018-11-01/openapi.yaml',
  output: './src/timestream-write/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/timestream-write/types.ts' },
  client: { output: './src/timestream-write/client.ts', baseUrl: '/' },
  rpc: { output: './src/timestream-write/rpc.ts', parseResponse: true },
  swr: { output: './src/timestream-write/hooks/swr.ts' },
  'tanstack-query': { output: './src/timestream-write/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/timestream-write/hooks/preact-query.ts' },
  'solid-query': { output: './src/timestream-write/hooks/solid-query.ts' },
  'vue-query': { output: './src/timestream-write/hooks/vue-query.ts' },
  'svelte-query': { output: './src/timestream-write/hooks/svelte-query.ts' },
  'angular-query': { output: './src/timestream-write/hooks/angular-query.ts' },
  docs: {
    output: './src/timestream-write/api.md',
    curl: true,
    baseUrl: 'https://timestream-write.us-east-1.amazonaws.com',
  },
})
