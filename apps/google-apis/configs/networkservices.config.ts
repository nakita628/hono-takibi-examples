import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/networkservices/v1beta1/openapi.yaml',
  output: './src/networkservices/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/networkservices/types.ts' },
  client: { output: './src/networkservices/client.ts', baseUrl: '/' },
  rpc: { output: './src/networkservices/rpc.ts', parseResponse: true },
  swr: { output: './src/networkservices/hooks/swr.ts' },
  'tanstack-query': { output: './src/networkservices/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/networkservices/hooks/preact-query.ts' },
  'solid-query': { output: './src/networkservices/hooks/solid-query.ts' },
  'vue-query': { output: './src/networkservices/hooks/vue-query.ts' },
  'svelte-query': { output: './src/networkservices/hooks/svelte-query.ts' },
  'angular-query': { output: './src/networkservices/hooks/angular-query.ts' },
  docs: {
    output: './src/networkservices/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
