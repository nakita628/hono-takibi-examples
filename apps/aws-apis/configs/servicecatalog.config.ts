import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/servicecatalog/2015-12-10/openapi.yaml',
  output: './src/servicecatalog/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/servicecatalog/types.ts' },
  client: { output: './src/servicecatalog/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicecatalog/rpc.ts', parseResponse: true },
  swr: { output: './src/servicecatalog/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicecatalog/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicecatalog/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicecatalog/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicecatalog/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicecatalog/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicecatalog/hooks/angular-query.ts' },
  docs: {
    output: './src/servicecatalog/api.md',
    curl: true,
    baseUrl: 'https://servicecatalog.us-east-1.amazonaws.com',
  },
})
