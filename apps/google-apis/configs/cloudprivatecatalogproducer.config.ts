import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/cloudprivatecatalogproducer/v1beta1/openapi.yaml',
  output: './src/cloudprivatecatalogproducer/routes.ts',
  template: {},
  type: { output: './src/cloudprivatecatalogproducer/types.ts' },
  client: { output: './src/cloudprivatecatalogproducer/client.ts', baseUrl: '/' },
  rpc: { output: './src/cloudprivatecatalogproducer/rpc.ts', parseResponse: true },
  swr: { output: './src/cloudprivatecatalogproducer/hooks/swr.ts' },
  'tanstack-query': { output: './src/cloudprivatecatalogproducer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cloudprivatecatalogproducer/hooks/preact-query.ts' },
  'solid-query': { output: './src/cloudprivatecatalogproducer/hooks/solid-query.ts' },
  'vue-query': { output: './src/cloudprivatecatalogproducer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cloudprivatecatalogproducer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cloudprivatecatalogproducer/hooks/angular-query.ts' },
  docs: {
    output: './src/cloudprivatecatalogproducer/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
