import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/storagegateway/2013-06-30/openapi.yaml',
  output: './src/storagegateway/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/storagegateway/types.ts' },
  client: { output: './src/storagegateway/client.ts', baseUrl: '/' },
  rpc: { output: './src/storagegateway/rpc.ts', parseResponse: true },
  swr: { output: './src/storagegateway/hooks/swr.ts' },
  'tanstack-query': { output: './src/storagegateway/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/storagegateway/hooks/preact-query.ts' },
  'solid-query': { output: './src/storagegateway/hooks/solid-query.ts' },
  'vue-query': { output: './src/storagegateway/hooks/vue-query.ts' },
  'svelte-query': { output: './src/storagegateway/hooks/svelte-query.ts' },
  'angular-query': { output: './src/storagegateway/hooks/angular-query.ts' },
  docs: {
    output: './src/storagegateway/api.md',
    curl: true,
    baseUrl: 'https://storagegateway.us-east-1.amazonaws.com',
  },
})
