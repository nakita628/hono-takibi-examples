import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/gov.bc.ca/geomark/4.1.2/openapi.yaml',
  output: './src/geomark/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/geomark/types.ts' },
  client: { output: './src/geomark/client.ts', baseUrl: '/' },
  rpc: { output: './src/geomark/rpc.ts', parseResponse: true },
  swr: { output: './src/geomark/hooks/swr.ts' },
  'tanstack-query': { output: './src/geomark/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/geomark/hooks/preact-query.ts' },
  'solid-query': { output: './src/geomark/hooks/solid-query.ts' },
  'vue-query': { output: './src/geomark/hooks/vue-query.ts' },
  'svelte-query': { output: './src/geomark/hooks/svelte-query.ts' },
  'angular-query': { output: './src/geomark/hooks/angular-query.ts' },
  docs: {
    output: './src/geomark/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
