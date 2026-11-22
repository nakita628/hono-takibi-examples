import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/microsoft.com/graph-beta/1.0.1/openapi.yaml',
  output: './src/microsoft-graph-beta/routes.ts',
  template: {},
  type: { output: './src/microsoft-graph-beta/types.ts' },
  client: { output: './src/microsoft-graph-beta/client.ts', baseUrl: '/' },
  rpc: { output: './src/microsoft-graph-beta/rpc.ts', parseResponse: true },
  swr: { output: './src/microsoft-graph-beta/hooks/swr.ts' },
  'tanstack-query': { output: './src/microsoft-graph-beta/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/microsoft-graph-beta/hooks/preact-query.ts' },
  'solid-query': { output: './src/microsoft-graph-beta/hooks/solid-query.ts' },
  'vue-query': { output: './src/microsoft-graph-beta/hooks/vue-query.ts' },
  'svelte-query': { output: './src/microsoft-graph-beta/hooks/svelte-query.ts' },
  'angular-query': { output: './src/microsoft-graph-beta/hooks/angular-query.ts' },
  docs: {
    output: './src/microsoft-graph-beta/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
