import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/seldon.local/engine/0.1/openapi.yaml',
  output: './src/seldon-engine/routes.ts',
  template: {},
  type: { output: './src/seldon-engine/types.ts' },
  client: { output: './src/seldon-engine/client.ts', baseUrl: '/' },
  rpc: { output: './src/seldon-engine/rpc.ts', parseResponse: true },
  swr: { output: './src/seldon-engine/hooks/swr.ts' },
  'tanstack-query': { output: './src/seldon-engine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/seldon-engine/hooks/preact-query.ts' },
  'solid-query': { output: './src/seldon-engine/hooks/solid-query.ts' },
  'vue-query': { output: './src/seldon-engine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/seldon-engine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/seldon-engine/hooks/angular-query.ts' },
  docs: {
    output: './src/seldon-engine/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
