import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/zeit.co/v2019-01-07/openapi.yaml',
  output: './src/zeit-co/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/zeit-co/types.ts' },
  client: { output: './src/zeit-co/client.ts', baseUrl: '/' },
  rpc: { output: './src/zeit-co/rpc.ts', parseResponse: true },
  swr: { output: './src/zeit-co/hooks/swr.ts' },
  'tanstack-query': { output: './src/zeit-co/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/zeit-co/hooks/preact-query.ts' },
  'solid-query': { output: './src/zeit-co/hooks/solid-query.ts' },
  'vue-query': { output: './src/zeit-co/hooks/vue-query.ts' },
  'svelte-query': { output: './src/zeit-co/hooks/svelte-query.ts' },
  'angular-query': { output: './src/zeit-co/hooks/angular-query.ts' },
  docs: {
    output: './src/zeit-co/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
