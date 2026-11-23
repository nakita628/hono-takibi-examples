import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/dataflowkit.com/1.3/openapi.yaml',
  output: './src/dataflowkit/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/dataflowkit/types.ts' },
  client: { output: './src/dataflowkit/client.ts', baseUrl: '/' },
  rpc: { output: './src/dataflowkit/rpc.ts', parseResponse: true },
  swr: { output: './src/dataflowkit/hooks/swr.ts' },
  'tanstack-query': { output: './src/dataflowkit/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dataflowkit/hooks/preact-query.ts' },
  'solid-query': { output: './src/dataflowkit/hooks/solid-query.ts' },
  'vue-query': { output: './src/dataflowkit/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dataflowkit/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dataflowkit/hooks/angular-query.ts' },
  docs: {
    output: './src/dataflowkit/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
