import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudprivatecatalog/v1beta1/openapi.yaml',
  output: './src/cloudprivatecatalog/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cloudprivatecatalog/types.ts' },
  client: { output: './src/cloudprivatecatalog/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudprivatecatalog/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudprivatecatalog/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudprivatecatalog/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudprivatecatalog/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudprivatecatalog/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudprivatecatalog/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudprivatecatalog/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudprivatecatalog/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudprivatecatalog/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
