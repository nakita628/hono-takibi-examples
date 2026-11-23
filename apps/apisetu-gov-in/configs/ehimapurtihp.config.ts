import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/ehimapurtihp/3.0.0/openapi.yaml',
  output: './src/ehimapurtihp/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ehimapurtihp/types.ts' },
  client: { output: './src/ehimapurtihp/client.ts', baseUrl: '/' },
  rpc: { output: './src/ehimapurtihp/rpc.ts', parseResponse: true },
  swr: { output: './src/ehimapurtihp/hooks/swr.ts' },
  'tanstack-query': { output: './src/ehimapurtihp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ehimapurtihp/hooks/preact-query.ts' },
  'solid-query': { output: './src/ehimapurtihp/hooks/solid-query.ts' },
  'vue-query': { output: './src/ehimapurtihp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ehimapurtihp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ehimapurtihp/hooks/angular-query.ts' },
  docs: {
    output: './src/ehimapurtihp/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
