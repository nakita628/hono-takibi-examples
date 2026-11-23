import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/shorten.rest/1.0.0/openapi.yaml',
  output: './src/shorten-rest/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/shorten-rest/types.ts' },
  client: { output: './src/shorten-rest/client.ts', baseUrl: '/' },
  rpc: { output: './src/shorten-rest/rpc.ts', parseResponse: true },
  swr: { output: './src/shorten-rest/hooks/swr.ts' },
  'tanstack-query': { output: './src/shorten-rest/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/shorten-rest/hooks/preact-query.ts' },
  'solid-query': { output: './src/shorten-rest/hooks/solid-query.ts' },
  'vue-query': { output: './src/shorten-rest/hooks/vue-query.ts' },
  'svelte-query': { output: './src/shorten-rest/hooks/svelte-query.ts' },
  'angular-query': { output: './src/shorten-rest/hooks/angular-query.ts' },
  docs: {
    output: './src/shorten-rest/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
