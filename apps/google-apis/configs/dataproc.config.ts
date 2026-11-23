import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataproc/v1/openapi.yaml',
  output: './src/dataproc/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dataproc/types.ts' },
  client: { output: './src/dataproc/client.ts', baseUrl: '/' },
  rpc: { output: './src/dataproc/rpc.ts', parseResponse: true },
  swr: { output: './src/dataproc/hooks/swr.ts' },
  'tanstack-query': { output: './src/dataproc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dataproc/hooks/preact-query.ts' },
  'solid-query': { output: './src/dataproc/hooks/solid-query.ts' },
  'vue-query': { output: './src/dataproc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dataproc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dataproc/hooks/angular-query.ts' },
  docs: {
    output: './src/dataproc/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
