import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/transportar/3.0.0/openapi.yaml',
  output: './src/transportar/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/transportar/types.ts' },
  client: { output: './src/transportar/client.ts', baseUrl: '/' },
  rpc: { output: './src/transportar/rpc.ts', parseResponse: true },
  swr: { output: './src/transportar/hooks/swr.ts' },
  'tanstack-query': { output: './src/transportar/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/transportar/hooks/preact-query.ts' },
  'solid-query': { output: './src/transportar/hooks/solid-query.ts' },
  'vue-query': { output: './src/transportar/hooks/vue-query.ts' },
  'svelte-query': { output: './src/transportar/hooks/svelte-query.ts' },
  'angular-query': { output: './src/transportar/hooks/angular-query.ts' },
  docs: {
    output: './src/transportar/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
