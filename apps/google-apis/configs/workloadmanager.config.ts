import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workloadmanager/v1/openapi.yaml',
  output: './src/workloadmanager/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/workloadmanager/types.ts' },
  client: { output: './src/workloadmanager/client.ts', baseUrl: '/' },
  rpc: { output: './src/workloadmanager/rpc.ts', parseResponse: true },
  swr: { output: './src/workloadmanager/hooks/swr.ts' },
  'tanstack-query': { output: './src/workloadmanager/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workloadmanager/hooks/preact-query.ts' },
  'solid-query': { output: './src/workloadmanager/hooks/solid-query.ts' },
  'vue-query': { output: './src/workloadmanager/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workloadmanager/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workloadmanager/hooks/angular-query.ts' },
  docs: {
    output: './src/workloadmanager/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
