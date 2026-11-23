import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/dataform/v1beta1/openapi.yaml',
  output: './src/dataform/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dataform/types.ts' },
  client: { output: './src/dataform/client.ts', baseUrl: '/' },
  rpc: { output: './src/dataform/rpc.ts', parseResponse: true },
  swr: { output: './src/dataform/hooks/swr.ts' },
  'tanstack-query': { output: './src/dataform/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dataform/hooks/preact-query.ts' },
  'solid-query': { output: './src/dataform/hooks/solid-query.ts' },
  'vue-query': { output: './src/dataform/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dataform/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dataform/hooks/angular-query.ts' },
  docs: {
    output: './src/dataform/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
