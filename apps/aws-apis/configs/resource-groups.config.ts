import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/resource-groups/2017-11-27/openapi.yaml',
  output: './src/resource-groups/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/resource-groups/types.ts' },
  client: { output: './src/resource-groups/client.ts', baseUrl: '/' },
  rpc: { output: './src/resource-groups/rpc.ts', parseResponse: true },
  swr: { output: './src/resource-groups/hooks/swr.ts' },
  'tanstack-query': { output: './src/resource-groups/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/resource-groups/hooks/preact-query.ts' },
  'solid-query': { output: './src/resource-groups/hooks/solid-query.ts' },
  'vue-query': { output: './src/resource-groups/hooks/vue-query.ts' },
  'svelte-query': { output: './src/resource-groups/hooks/svelte-query.ts' },
  'angular-query': { output: './src/resource-groups/hooks/angular-query.ts' },
  docs: {
    output: './src/resource-groups/api.md',
    curl: true,
    baseUrl: 'https://resource-groups.us-east-1.amazonaws.com',
  },
})
