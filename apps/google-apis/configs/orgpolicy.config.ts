import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/orgpolicy/v2/openapi.yaml',
  output: './src/orgpolicy/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/orgpolicy/types.ts' },
  client: { output: './src/orgpolicy/client.ts', baseUrl: '/' },
  rpc: { output: './src/orgpolicy/rpc.ts', parseResponse: true },
  swr: { output: './src/orgpolicy/hooks/swr.ts' },
  'tanstack-query': { output: './src/orgpolicy/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/orgpolicy/hooks/preact-query.ts' },
  'solid-query': { output: './src/orgpolicy/hooks/solid-query.ts' },
  'vue-query': { output: './src/orgpolicy/hooks/vue-query.ts' },
  'svelte-query': { output: './src/orgpolicy/hooks/svelte-query.ts' },
  'angular-query': { output: './src/orgpolicy/hooks/angular-query.ts' },
  docs: {
    output: './src/orgpolicy/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
