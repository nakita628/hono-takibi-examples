import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/seldon.local/core/0.1/openapi.yaml',
  output: './src/seldon-core/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/seldon-core/types.ts' },
  client: { output: './src/seldon-core/client.ts', baseUrl: '/' },
  rpc: { output: './src/seldon-core/rpc.ts', parseResponse: true },
  swr: { output: './src/seldon-core/hooks/swr.ts' },
  'tanstack-query': { output: './src/seldon-core/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/seldon-core/hooks/preact-query.ts' },
  'solid-query': { output: './src/seldon-core/hooks/solid-query.ts' },
  'vue-query': { output: './src/seldon-core/hooks/vue-query.ts' },
  'svelte-query': { output: './src/seldon-core/hooks/svelte-query.ts' },
  'angular-query': { output: './src/seldon-core/hooks/angular-query.ts' },
  docs: {
    output: './src/seldon-core/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
