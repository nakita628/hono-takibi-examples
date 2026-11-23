import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tomtom.com/routing/1.0.0/openapi.yaml',
  output: './src/tomtom-routing/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/tomtom-routing/types.ts' },
  client: { output: './src/tomtom-routing/client.ts', baseUrl: '/' },
  rpc: { output: './src/tomtom-routing/rpc.ts', parseResponse: true },
  swr: { output: './src/tomtom-routing/hooks/swr.ts' },
  'tanstack-query': { output: './src/tomtom-routing/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tomtom-routing/hooks/preact-query.ts' },
  'solid-query': { output: './src/tomtom-routing/hooks/solid-query.ts' },
  'vue-query': { output: './src/tomtom-routing/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tomtom-routing/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tomtom-routing/hooks/angular-query.ts' },
  docs: {
    output: './src/tomtom-routing/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
