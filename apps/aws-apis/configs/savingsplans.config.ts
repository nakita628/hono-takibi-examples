import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/savingsplans/2019-06-28/openapi.yaml',
  output: './src/savingsplans/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/savingsplans/types.ts' },
  client: { output: './src/savingsplans/client.ts', baseUrl: '/' },
  rpc: { output: './src/savingsplans/rpc.ts', parseResponse: true },
  swr: { output: './src/savingsplans/hooks/swr.ts' },
  'tanstack-query': { output: './src/savingsplans/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/savingsplans/hooks/preact-query.ts' },
  'solid-query': { output: './src/savingsplans/hooks/solid-query.ts' },
  'vue-query': { output: './src/savingsplans/hooks/vue-query.ts' },
  'svelte-query': { output: './src/savingsplans/hooks/svelte-query.ts' },
  'angular-query': { output: './src/savingsplans/hooks/angular-query.ts' },
  docs: {
    output: './src/savingsplans/api.md',
    curl: true,
    baseUrl: 'https://savingsplans.us-east-1.amazonaws.com',
  },
})
