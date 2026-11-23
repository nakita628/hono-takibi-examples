import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/realtimebidding/v1alpha/openapi.yaml',
  output: './src/realtimebidding/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/realtimebidding/types.ts' },
  client: { output: './src/realtimebidding/client.ts', baseUrl: '/' },
  rpc: { output: './src/realtimebidding/rpc.ts', parseResponse: true },
  swr: { output: './src/realtimebidding/hooks/swr.ts' },
  'tanstack-query': { output: './src/realtimebidding/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/realtimebidding/hooks/preact-query.ts' },
  'solid-query': { output: './src/realtimebidding/hooks/solid-query.ts' },
  'vue-query': { output: './src/realtimebidding/hooks/vue-query.ts' },
  'svelte-query': { output: './src/realtimebidding/hooks/svelte-query.ts' },
  'angular-query': { output: './src/realtimebidding/hooks/angular-query.ts' },
  docs: {
    output: './src/realtimebidding/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
