import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/datastore/v1beta1/openapi.yaml',
  output: './src/datastore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/datastore/types.ts' },
  client: { output: './src/datastore/client.ts', baseUrl: '/' },
  rpc: { output: './src/datastore/rpc.ts', parseResponse: true },
  swr: { output: './src/datastore/hooks/swr.ts' },
  'tanstack-query': { output: './src/datastore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/datastore/hooks/preact-query.ts' },
  'solid-query': { output: './src/datastore/hooks/solid-query.ts' },
  'vue-query': { output: './src/datastore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/datastore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/datastore/hooks/angular-query.ts' },
  docs: {
    output: './src/datastore/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
