import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/connect/2017-08-08/openapi.yaml',
  output: './src/connect/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/connect/types.ts' },
  client: { output: './src/connect/client.ts', baseUrl: '/' },
  rpc: { output: './src/connect/rpc.ts', parseResponse: true },
  swr: { output: './src/connect/hooks/swr.ts' },
  'tanstack-query': { output: './src/connect/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/connect/hooks/preact-query.ts' },
  'solid-query': { output: './src/connect/hooks/solid-query.ts' },
  'vue-query': { output: './src/connect/hooks/vue-query.ts' },
  'svelte-query': { output: './src/connect/hooks/svelte-query.ts' },
  'angular-query': { output: './src/connect/hooks/angular-query.ts' },
  docs: {
    output: './src/connect/api.md',
    curl: true,
    baseUrl: 'https://connect.us-east-1.amazonaws.com',
  },
})
