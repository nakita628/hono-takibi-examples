import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/netboxdemo.com/2.8/openapi.yaml',
  output: './src/netboxdemo/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/netboxdemo/types.ts' },
  client: { output: './src/netboxdemo/client.ts', baseUrl: '/' },
  rpc: { output: './src/netboxdemo/rpc.ts', parseResponse: true },
  swr: { output: './src/netboxdemo/hooks/swr.ts' },
  'tanstack-query': { output: './src/netboxdemo/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/netboxdemo/hooks/preact-query.ts' },
  'solid-query': { output: './src/netboxdemo/hooks/solid-query.ts' },
  'vue-query': { output: './src/netboxdemo/hooks/vue-query.ts' },
  'svelte-query': { output: './src/netboxdemo/hooks/svelte-query.ts' },
  'angular-query': { output: './src/netboxdemo/hooks/angular-query.ts' },
  docs: {
    output: './src/netboxdemo/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
