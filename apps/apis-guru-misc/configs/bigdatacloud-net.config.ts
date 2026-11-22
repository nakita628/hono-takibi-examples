import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bigdatacloud.net/1.0.0/openapi.yaml',
  output: './src/bigdatacloud-net/routes.ts',
  template: {},
  type: { output: './src/bigdatacloud-net/types.ts' },
  client: { output: './src/bigdatacloud-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigdatacloud-net/rpc.ts', parseResponse: true },
  swr: { output: './src/bigdatacloud-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigdatacloud-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigdatacloud-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigdatacloud-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigdatacloud-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigdatacloud-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigdatacloud-net/hooks/angular-query.ts' },
  docs: {
    output: './src/bigdatacloud-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
