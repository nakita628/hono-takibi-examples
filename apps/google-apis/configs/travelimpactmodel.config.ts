import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/travelimpactmodel/v1/openapi.yaml',
  output: './src/travelimpactmodel/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/travelimpactmodel/types.ts' },
  client: { output: './src/travelimpactmodel/client.ts', baseUrl: '/' },
  rpc: { output: './src/travelimpactmodel/rpc.ts', parseResponse: true },
  swr: { output: './src/travelimpactmodel/hooks/swr.ts' },
  'tanstack-query': { output: './src/travelimpactmodel/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/travelimpactmodel/hooks/preact-query.ts' },
  'solid-query': { output: './src/travelimpactmodel/hooks/solid-query.ts' },
  'vue-query': { output: './src/travelimpactmodel/hooks/vue-query.ts' },
  'svelte-query': { output: './src/travelimpactmodel/hooks/svelte-query.ts' },
  'angular-query': { output: './src/travelimpactmodel/hooks/angular-query.ts' },
  docs: {
    output: './src/travelimpactmodel/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
