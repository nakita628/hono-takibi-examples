import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/workflows/v1beta/openapi.yaml',
  output: './src/workflows/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/workflows/types.ts' },
  client: { output: './src/workflows/client.ts', baseUrl: '/' },
  rpc: { output: './src/workflows/rpc.ts', parseResponse: true },
  swr: { output: './src/workflows/hooks/swr.ts' },
  'tanstack-query': { output: './src/workflows/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/workflows/hooks/preact-query.ts' },
  'solid-query': { output: './src/workflows/hooks/solid-query.ts' },
  'vue-query': { output: './src/workflows/hooks/vue-query.ts' },
  'svelte-query': { output: './src/workflows/hooks/svelte-query.ts' },
  'angular-query': { output: './src/workflows/hooks/angular-query.ts' },
  docs: {
    output: './src/workflows/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
