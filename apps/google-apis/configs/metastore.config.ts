import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/metastore/v1beta/openapi.yaml',
  output: './src/metastore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/metastore/types.ts' },
  client: { output: './src/metastore/client.ts', baseUrl: '/' },
  rpc: { output: './src/metastore/rpc.ts', parseResponse: true },
  swr: { output: './src/metastore/hooks/swr.ts' },
  'tanstack-query': { output: './src/metastore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/metastore/hooks/preact-query.ts' },
  'solid-query': { output: './src/metastore/hooks/solid-query.ts' },
  'vue-query': { output: './src/metastore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/metastore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/metastore/hooks/angular-query.ts' },
  docs: {
    output: './src/metastore/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
