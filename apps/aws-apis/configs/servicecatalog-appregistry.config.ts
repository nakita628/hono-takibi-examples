import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/servicecatalog-appregistry/2020-06-24/openapi.yaml',
  output: './src/servicecatalog-appregistry/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/servicecatalog-appregistry/types.ts' },
  client: { output: './src/servicecatalog-appregistry/client.ts', baseUrl: '/' },
  rpc: { output: './src/servicecatalog-appregistry/rpc.ts', parseResponse: true },
  swr: { output: './src/servicecatalog-appregistry/hooks/swr.ts' },
  'tanstack-query': { output: './src/servicecatalog-appregistry/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/servicecatalog-appregistry/hooks/preact-query.ts' },
  'solid-query': { output: './src/servicecatalog-appregistry/hooks/solid-query.ts' },
  'vue-query': { output: './src/servicecatalog-appregistry/hooks/vue-query.ts' },
  'svelte-query': { output: './src/servicecatalog-appregistry/hooks/svelte-query.ts' },
  'angular-query': { output: './src/servicecatalog-appregistry/hooks/angular-query.ts' },
  docs: {
    output: './src/servicecatalog-appregistry/api.md',
    curl: true,
    baseUrl: 'https://servicecatalog-appregistry.us-east-1.amazonaws.com',
  },
})
