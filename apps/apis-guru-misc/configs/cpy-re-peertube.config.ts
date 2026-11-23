import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/cpy.re/peertube/5.1.0/openapi.yaml',
  output: './src/cpy-re-peertube/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/cpy-re-peertube/types.ts' },
  client: { output: './src/cpy-re-peertube/client.ts', baseUrl: '/' },
  rpc: { output: './src/cpy-re-peertube/rpc.ts', parseResponse: true },
  swr: { output: './src/cpy-re-peertube/hooks/swr.ts' },
  'tanstack-query': { output: './src/cpy-re-peertube/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/cpy-re-peertube/hooks/preact-query.ts' },
  'solid-query': { output: './src/cpy-re-peertube/hooks/solid-query.ts' },
  'vue-query': { output: './src/cpy-re-peertube/hooks/vue-query.ts' },
  'svelte-query': { output: './src/cpy-re-peertube/hooks/svelte-query.ts' },
  'angular-query': { output: './src/cpy-re-peertube/hooks/angular-query.ts' },
  docs: {
    output: './src/cpy-re-peertube/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
