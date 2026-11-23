import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/runtimeconfig/v1beta1/openapi.yaml',
  output: './src/runtimeconfig/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/runtimeconfig/types.ts' },
  client: { output: './src/runtimeconfig/client.ts', baseUrl: '/' },
  rpc: { output: './src/runtimeconfig/rpc.ts', parseResponse: true },
  swr: { output: './src/runtimeconfig/hooks/swr.ts' },
  'tanstack-query': { output: './src/runtimeconfig/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/runtimeconfig/hooks/preact-query.ts' },
  'solid-query': { output: './src/runtimeconfig/hooks/solid-query.ts' },
  'vue-query': { output: './src/runtimeconfig/hooks/vue-query.ts' },
  'svelte-query': { output: './src/runtimeconfig/hooks/svelte-query.ts' },
  'angular-query': { output: './src/runtimeconfig/hooks/angular-query.ts' },
  docs: {
    output: './src/runtimeconfig/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
