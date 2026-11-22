import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/adexperiencereport/v1/openapi.yaml',
  output: './src/adexperiencereport/routes.ts',
  template: {},
  type: { output: './src/adexperiencereport/types.ts' },
  client: { output: './src/adexperiencereport/client.ts', baseUrl: '/' },
  rpc: { output: './src/adexperiencereport/rpc.ts', parseResponse: true },
  swr: { output: './src/adexperiencereport/hooks/swr.ts' },
  'tanstack-query': { output: './src/adexperiencereport/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/adexperiencereport/hooks/preact-query.ts' },
  'solid-query': { output: './src/adexperiencereport/hooks/solid-query.ts' },
  'vue-query': { output: './src/adexperiencereport/hooks/vue-query.ts' },
  'svelte-query': { output: './src/adexperiencereport/hooks/svelte-query.ts' },
  'angular-query': { output: './src/adexperiencereport/hooks/angular-query.ts' },
  docs: {
    output: './src/adexperiencereport/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
