import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/neutrinoapi.net/3.6.3/openapi.yaml',
  output: './src/neutrinoapi-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/neutrinoapi-net/types.ts' },
  client: { output: './src/neutrinoapi-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/neutrinoapi-net/rpc.ts', parseResponse: true },
  swr: { output: './src/neutrinoapi-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/neutrinoapi-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/neutrinoapi-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/neutrinoapi-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/neutrinoapi-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/neutrinoapi-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/neutrinoapi-net/hooks/angular-query.ts' },
  docs: {
    output: './src/neutrinoapi-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
