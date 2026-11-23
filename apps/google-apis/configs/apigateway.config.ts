import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/apigateway/v1alpha2/openapi.yaml',
  output: './src/apigateway/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/apigateway/types.ts' },
  client: { output: './src/apigateway/client.ts', baseUrl: '/' },
  rpc: { output: './src/apigateway/rpc.ts', parseResponse: true },
  swr: { output: './src/apigateway/hooks/swr.ts' },
  'tanstack-query': { output: './src/apigateway/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/apigateway/hooks/preact-query.ts' },
  'solid-query': { output: './src/apigateway/hooks/solid-query.ts' },
  'vue-query': { output: './src/apigateway/hooks/vue-query.ts' },
  'svelte-query': { output: './src/apigateway/hooks/svelte-query.ts' },
  'angular-query': { output: './src/apigateway/hooks/angular-query.ts' },
  docs: {
    output: './src/apigateway/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
