import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networkconnectivity/v1/openapi.yaml',
  output: './src/networkconnectivity/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/networkconnectivity/types.ts' },
  client: { output: './src/networkconnectivity/client.ts', baseUrl: '/' },
  rpc: { output: './src/networkconnectivity/rpc.ts', parseResponse: true },
  swr: { output: './src/networkconnectivity/hooks/swr.ts' },
  'tanstack-query': { output: './src/networkconnectivity/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/networkconnectivity/hooks/preact-query.ts' },
  'solid-query': { output: './src/networkconnectivity/hooks/solid-query.ts' },
  'vue-query': { output: './src/networkconnectivity/hooks/vue-query.ts' },
  'svelte-query': { output: './src/networkconnectivity/hooks/svelte-query.ts' },
  'angular-query': { output: './src/networkconnectivity/hooks/angular-query.ts' },
  docs: {
    output: './src/networkconnectivity/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
