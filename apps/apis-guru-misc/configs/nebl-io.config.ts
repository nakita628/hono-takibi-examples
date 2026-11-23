import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/nebl.io/1.3.0/openapi.yaml',
  output: './src/nebl-io/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/nebl-io/types.ts' },
  client: { output: './src/nebl-io/client.ts', baseUrl: '/' },
  rpc: { output: './src/nebl-io/rpc.ts', parseResponse: true },
  swr: { output: './src/nebl-io/hooks/swr.ts' },
  'tanstack-query': { output: './src/nebl-io/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/nebl-io/hooks/preact-query.ts' },
  'solid-query': { output: './src/nebl-io/hooks/solid-query.ts' },
  'vue-query': { output: './src/nebl-io/hooks/vue-query.ts' },
  'svelte-query': { output: './src/nebl-io/hooks/svelte-query.ts' },
  'angular-query': { output: './src/nebl-io/hooks/angular-query.ts' },
  docs: {
    output: './src/nebl-io/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
