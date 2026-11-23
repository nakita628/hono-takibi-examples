import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/fms/2018-01-01/openapi.yaml',
  output: './src/fms/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/fms/types.ts' },
  client: { output: './src/fms/client.ts', baseUrl: '/' },
  rpc: { output: './src/fms/rpc.ts', parseResponse: true },
  swr: { output: './src/fms/hooks/swr.ts' },
  'tanstack-query': { output: './src/fms/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/fms/hooks/preact-query.ts' },
  'solid-query': { output: './src/fms/hooks/solid-query.ts' },
  'vue-query': { output: './src/fms/hooks/vue-query.ts' },
  'svelte-query': { output: './src/fms/hooks/svelte-query.ts' },
  'angular-query': { output: './src/fms/hooks/angular-query.ts' },
  docs: {
    output: './src/fms/api.md',
    curl: true,
    baseUrl: 'https://fms.us-east-1.amazonaws.com',
  },
})
