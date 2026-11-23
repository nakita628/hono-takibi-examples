import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/tsapi.net/v1/openapi.yaml',
  output: './src/tsapi-net/routes.ts',
  template: {},
  type: { output: './src/tsapi-net/types.ts' },
  client: { output: './src/tsapi-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/tsapi-net/rpc.ts', parseResponse: true },
  swr: { output: './src/tsapi-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/tsapi-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/tsapi-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/tsapi-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/tsapi-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/tsapi-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/tsapi-net/hooks/angular-query.ts' },
  docs: {
    output: './src/tsapi-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
