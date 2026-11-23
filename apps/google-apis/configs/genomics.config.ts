import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/genomics/v2alpha1/openapi.yaml',
  output: './src/genomics/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/genomics/types.ts' },
  client: { output: './src/genomics/client.ts', baseUrl: '/' },
  rpc: { output: './src/genomics/rpc.ts', parseResponse: true },
  swr: { output: './src/genomics/hooks/swr.ts' },
  'tanstack-query': { output: './src/genomics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/genomics/hooks/preact-query.ts' },
  'solid-query': { output: './src/genomics/hooks/solid-query.ts' },
  'vue-query': { output: './src/genomics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/genomics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/genomics/hooks/angular-query.ts' },
  docs: {
    output: './src/genomics/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
