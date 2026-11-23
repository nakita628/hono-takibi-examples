import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/advisorynotifications/v1/openapi.yaml',
  output: './src/advisorynotifications/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/advisorynotifications/types.ts' },
  client: { output: './src/advisorynotifications/client.ts', baseUrl: '/' },
  rpc: { output: './src/advisorynotifications/rpc.ts', parseResponse: true },
  swr: { output: './src/advisorynotifications/hooks/swr.ts' },
  'tanstack-query': { output: './src/advisorynotifications/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/advisorynotifications/hooks/preact-query.ts' },
  'solid-query': { output: './src/advisorynotifications/hooks/solid-query.ts' },
  'vue-query': { output: './src/advisorynotifications/hooks/vue-query.ts' },
  'svelte-query': { output: './src/advisorynotifications/hooks/svelte-query.ts' },
  'angular-query': { output: './src/advisorynotifications/hooks/angular-query.ts' },
  docs: {
    output: './src/advisorynotifications/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
