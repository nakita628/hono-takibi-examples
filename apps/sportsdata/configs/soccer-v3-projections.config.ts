import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/sportsdata.io/soccer-v3-projections/1.0/openapi.yaml',
  output: './src/soccer-v3-projections/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/soccer-v3-projections/types.ts' },
  client: { output: './src/soccer-v3-projections/client.ts', baseUrl: '/' },
  rpc: { output: './src/soccer-v3-projections/rpc.ts', parseResponse: true },
  swr: { output: './src/soccer-v3-projections/hooks/swr.ts' },
  'tanstack-query': { output: './src/soccer-v3-projections/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/soccer-v3-projections/hooks/preact-query.ts' },
  'solid-query': { output: './src/soccer-v3-projections/hooks/solid-query.ts' },
  'vue-query': { output: './src/soccer-v3-projections/hooks/vue-query.ts' },
  'svelte-query': { output: './src/soccer-v3-projections/hooks/svelte-query.ts' },
  'angular-query': { output: './src/soccer-v3-projections/hooks/angular-query.ts' },
  docs: {
    output: './src/soccer-v3-projections/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
