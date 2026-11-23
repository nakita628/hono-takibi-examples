import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/graphhopper.com/1.0.0/openapi.yaml',
  output: './src/graphhopper/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/graphhopper/types.ts' },
  client: { output: './src/graphhopper/client.ts', baseUrl: '/' },
  rpc: { output: './src/graphhopper/rpc.ts', parseResponse: true },
  swr: { output: './src/graphhopper/hooks/swr.ts' },
  'tanstack-query': { output: './src/graphhopper/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/graphhopper/hooks/preact-query.ts' },
  'solid-query': { output: './src/graphhopper/hooks/solid-query.ts' },
  'vue-query': { output: './src/graphhopper/hooks/vue-query.ts' },
  'svelte-query': { output: './src/graphhopper/hooks/svelte-query.ts' },
  'angular-query': { output: './src/graphhopper/hooks/angular-query.ts' },
  docs: {
    output: './src/graphhopper/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
