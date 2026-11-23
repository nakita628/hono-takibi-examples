import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/replicapool/v1beta1/openapi.yaml',
  output: './src/replicapool/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/replicapool/types.ts' },
  client: { output: './src/replicapool/client.ts', baseUrl: '/' },
  rpc: { output: './src/replicapool/rpc.ts', parseResponse: true },
  swr: { output: './src/replicapool/hooks/swr.ts' },
  'tanstack-query': { output: './src/replicapool/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/replicapool/hooks/preact-query.ts' },
  'solid-query': { output: './src/replicapool/hooks/solid-query.ts' },
  'vue-query': { output: './src/replicapool/hooks/vue-query.ts' },
  'svelte-query': { output: './src/replicapool/hooks/svelte-query.ts' },
  'angular-query': { output: './src/replicapool/hooks/angular-query.ts' },
  docs: {
    output: './src/replicapool/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
