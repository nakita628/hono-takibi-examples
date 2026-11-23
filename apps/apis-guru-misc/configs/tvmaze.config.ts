import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tvmaze.com/1.0/openapi.yaml',
  output: './src/tvmaze/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/tvmaze/types.ts' },
  client: { output: './src/tvmaze/client.ts', baseUrl: '/' },
  rpc: { output: './src/tvmaze/rpc.ts', parseResponse: true },
  swr: { output: './src/tvmaze/hooks/swr.ts' },
  'tanstack-query': { output: './src/tvmaze/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tvmaze/hooks/preact-query.ts' },
  'solid-query': { output: './src/tvmaze/hooks/solid-query.ts' },
  'vue-query': { output: './src/tvmaze/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tvmaze/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tvmaze/hooks/angular-query.ts' },
  docs: {
    output: './src/tvmaze/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
