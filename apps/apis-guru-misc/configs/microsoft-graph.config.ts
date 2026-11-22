import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph/1.0.1/openapi.yaml',
  output: './src/microsoft-graph/routes.ts',
  template: {},
  type: { output: './src/microsoft-graph/types.ts' },
  client: { output: './src/microsoft-graph/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-graph/rpc.ts', parseResponse: true },
  swr: { output: './src/microsoft-graph/hooks/swr.ts' },
  'tanstack-query': { output: './src/microsoft-graph/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microsoft-graph/hooks/preact-query.ts' },
  'solid-query': { output: './src/microsoft-graph/hooks/solid-query.ts' },
  'vue-query': { output: './src/microsoft-graph/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microsoft-graph/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microsoft-graph/hooks/angular-query.ts' },
  docs: {
    output: './src/microsoft-graph/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
