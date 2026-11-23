import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datalineage/v1/openapi.yaml',
  output: './src/datalineage/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/datalineage/types.ts' },
  client: { output: './src/datalineage/client.ts', baseUrl: '/' },
  rpc: { output: './src/datalineage/rpc.ts', parseResponse: true },
  swr: { output: './src/datalineage/hooks/swr.ts' },
  'tanstack-query': { output: './src/datalineage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datalineage/hooks/preact-query.ts' },
  'solid-query': { output: './src/datalineage/hooks/solid-query.ts' },
  'vue-query': { output: './src/datalineage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datalineage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datalineage/hooks/angular-query.ts' },
  docs: {
    output: './src/datalineage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
