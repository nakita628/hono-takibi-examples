import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/stackexchange.com/2.0/openapi.yaml',
  output: './src/stackexchange/routes.ts',
  template: {},
  type: { output: './src/stackexchange/types.ts' },
  client: { output: './src/stackexchange/client.ts', baseUrl: '/' },
  rpc: { output: './src/stackexchange/rpc.ts', parseResponse: true },
  swr: { output: './src/stackexchange/hooks/swr.ts' },
  'tanstack-query': { output: './src/stackexchange/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/stackexchange/hooks/preact-query.ts' },
  'solid-query': { output: './src/stackexchange/hooks/solid-query.ts' },
  'vue-query': { output: './src/stackexchange/hooks/vue-query.ts' },
  'svelte-query': { output: './src/stackexchange/hooks/svelte-query.ts' },
  'angular-query': { output: './src/stackexchange/hooks/angular-query.ts' },
  docs: {
    output: './src/stackexchange/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
