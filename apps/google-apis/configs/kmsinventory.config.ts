import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/kmsinventory/v1/openapi.yaml',
  output: './src/kmsinventory/routes.ts',
  template: {},
  type: { output: './src/kmsinventory/types.ts' },
  client: { output: './src/kmsinventory/client.ts', baseUrl: '/' },
  rpc: { output: './src/kmsinventory/rpc.ts', parseResponse: true },
  swr: { output: './src/kmsinventory/hooks/swr.ts' },
  'tanstack-query': { output: './src/kmsinventory/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kmsinventory/hooks/preact-query.ts' },
  'solid-query': { output: './src/kmsinventory/hooks/solid-query.ts' },
  'vue-query': { output: './src/kmsinventory/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kmsinventory/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kmsinventory/hooks/angular-query.ts' },
  docs: {
    output: './src/kmsinventory/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
