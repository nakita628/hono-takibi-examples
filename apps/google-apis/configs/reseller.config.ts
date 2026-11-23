import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/reseller/v1/openapi.yaml',
  output: './src/reseller/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/reseller/types.ts' },
  client: { output: './src/reseller/client.ts', baseUrl: '/' },
  rpc: { output: './src/reseller/rpc.ts', parseResponse: true },
  swr: { output: './src/reseller/hooks/swr.ts' },
  'tanstack-query': { output: './src/reseller/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/reseller/hooks/preact-query.ts' },
  'solid-query': { output: './src/reseller/hooks/solid-query.ts' },
  'vue-query': { output: './src/reseller/hooks/vue-query.ts' },
  'svelte-query': { output: './src/reseller/hooks/svelte-query.ts' },
  'angular-query': { output: './src/reseller/hooks/angular-query.ts' },
  docs: {
    output: './src/reseller/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
