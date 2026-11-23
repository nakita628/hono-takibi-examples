import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tomtom.com/maps/1.0.0/openapi.yaml',
  output: './src/tomtom-maps/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/tomtom-maps/types.ts' },
  client: { output: './src/tomtom-maps/client.ts', baseUrl: '/' },
  rpc: { output: './src/tomtom-maps/rpc.ts', parseResponse: true },
  swr: { output: './src/tomtom-maps/hooks/swr.ts' },
  'tanstack-query': { output: './src/tomtom-maps/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tomtom-maps/hooks/preact-query.ts' },
  'solid-query': { output: './src/tomtom-maps/hooks/solid-query.ts' },
  'vue-query': { output: './src/tomtom-maps/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tomtom-maps/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tomtom-maps/hooks/angular-query.ts' },
  docs: {
    output: './src/tomtom-maps/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
