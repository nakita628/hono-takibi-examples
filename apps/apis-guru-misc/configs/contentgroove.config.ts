import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/contentgroove.com/1.0.0/openapi.yaml',
  output: './src/contentgroove/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/contentgroove/types.ts' },
  client: { output: './src/contentgroove/client.ts', baseUrl: '/' },
  rpc: { output: './src/contentgroove/rpc.ts', parseResponse: true },
  swr: { output: './src/contentgroove/hooks/swr.ts' },
  'tanstack-query': { output: './src/contentgroove/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/contentgroove/hooks/preact-query.ts' },
  'solid-query': { output: './src/contentgroove/hooks/solid-query.ts' },
  'vue-query': { output: './src/contentgroove/hooks/vue-query.ts' },
  'svelte-query': { output: './src/contentgroove/hooks/svelte-query.ts' },
  'angular-query': { output: './src/contentgroove/hooks/angular-query.ts' },
  docs: {
    output: './src/contentgroove/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
