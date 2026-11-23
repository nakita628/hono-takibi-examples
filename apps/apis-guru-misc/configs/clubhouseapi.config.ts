import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/clubhouseapi.com/1/openapi.yaml',
  output: './src/clubhouseapi/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/clubhouseapi/types.ts' },
  client: { output: './src/clubhouseapi/client.ts', baseUrl: '/' },
  rpc: { output: './src/clubhouseapi/rpc.ts', parseResponse: true },
  swr: { output: './src/clubhouseapi/hooks/swr.ts' },
  'tanstack-query': { output: './src/clubhouseapi/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/clubhouseapi/hooks/preact-query.ts' },
  'solid-query': { output: './src/clubhouseapi/hooks/solid-query.ts' },
  'vue-query': { output: './src/clubhouseapi/hooks/vue-query.ts' },
  'svelte-query': { output: './src/clubhouseapi/hooks/svelte-query.ts' },
  'angular-query': { output: './src/clubhouseapi/hooks/angular-query.ts' },
  docs: {
    output: './src/clubhouseapi/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
