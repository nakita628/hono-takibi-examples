import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/poly/v1/openapi.yaml',
  output: './src/poly/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/poly/types.ts' },
  client: { output: './src/poly/client.ts', baseUrl: '/' },
  rpc: { output: './src/poly/rpc.ts', parseResponse: true },
  swr: { output: './src/poly/hooks/swr.ts' },
  'tanstack-query': { output: './src/poly/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/poly/hooks/preact-query.ts' },
  'solid-query': { output: './src/poly/hooks/solid-query.ts' },
  'vue-query': { output: './src/poly/hooks/vue-query.ts' },
  'svelte-query': { output: './src/poly/hooks/svelte-query.ts' },
  'angular-query': { output: './src/poly/hooks/angular-query.ts' },
  docs: {
    output: './src/poly/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
