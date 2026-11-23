import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/xtrf.eu/2.0/openapi.yaml',
  output: './src/xtrf-eu/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/xtrf-eu/types.ts' },
  client: { output: './src/xtrf-eu/client.ts', baseUrl: '/' },
  rpc: { output: './src/xtrf-eu/rpc.ts', parseResponse: true },
  swr: { output: './src/xtrf-eu/hooks/swr.ts' },
  'tanstack-query': { output: './src/xtrf-eu/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/xtrf-eu/hooks/preact-query.ts' },
  'solid-query': { output: './src/xtrf-eu/hooks/solid-query.ts' },
  'vue-query': { output: './src/xtrf-eu/hooks/vue-query.ts' },
  'svelte-query': { output: './src/xtrf-eu/hooks/svelte-query.ts' },
  'angular-query': { output: './src/xtrf-eu/hooks/angular-query.ts' },
  docs: {
    output: './src/xtrf-eu/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
