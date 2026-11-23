import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/appmesh/2019-01-25/openapi.yaml',
  output: './src/appmesh/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/appmesh/types.ts' },
  client: { output: './src/appmesh/client.ts', baseUrl: '/' },
  rpc: { output: './src/appmesh/rpc.ts', parseResponse: true },
  swr: { output: './src/appmesh/hooks/swr.ts' },
  'tanstack-query': { output: './src/appmesh/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/appmesh/hooks/preact-query.ts' },
  'solid-query': { output: './src/appmesh/hooks/solid-query.ts' },
  'vue-query': { output: './src/appmesh/hooks/vue-query.ts' },
  'svelte-query': { output: './src/appmesh/hooks/svelte-query.ts' },
  'angular-query': { output: './src/appmesh/hooks/angular-query.ts' },
  docs: {
    output: './src/appmesh/api.md',
    curl: true,
    baseUrl: 'https://appmesh.us-east-1.amazonaws.com',
  },
})
