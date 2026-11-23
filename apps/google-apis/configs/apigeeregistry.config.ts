import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apigeeregistry/v1/openapi.yaml',
  output: './src/apigeeregistry/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apigeeregistry/types.ts' },
  client: { output: './src/apigeeregistry/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigeeregistry/rpc.ts', parseResponse: true },
  swr: { output: './src/apigeeregistry/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigeeregistry/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigeeregistry/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigeeregistry/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigeeregistry/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigeeregistry/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigeeregistry/hooks/angular-query.ts' },
  docs: {
    output: './src/apigeeregistry/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
