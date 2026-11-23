import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ce/2017-10-25/openapi.yaml',
  output: './src/ce/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ce/types.ts' },
  client: { output: './src/ce/client.ts', baseUrl: '/' },
  rpc: { output: './src/ce/rpc.ts', parseResponse: true },
  swr: { output: './src/ce/hooks/swr.ts' },
  'tanstack-query': { output: './src/ce/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ce/hooks/preact-query.ts' },
  'solid-query': { output: './src/ce/hooks/solid-query.ts' },
  'vue-query': { output: './src/ce/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ce/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ce/hooks/angular-query.ts' },
  docs: {
    output: './src/ce/api.md',
    curl: true,
    baseUrl: 'https://ce.us-east-1.amazonaws.com',
  },
})
