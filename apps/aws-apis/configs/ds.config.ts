import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ds/2015-04-16/openapi.yaml',
  output: './src/ds/routes.ts',
  template: {},
  type: { output: './src/ds/types.ts' },
  client: { output: './src/ds/client.ts', baseUrl: '/' },
  rpc: { output: './src/ds/rpc.ts', parseResponse: true },
  swr: { output: './src/ds/hooks/swr.ts' },
  'tanstack-query': { output: './src/ds/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ds/hooks/preact-query.ts' },
  'solid-query': { output: './src/ds/hooks/solid-query.ts' },
  'vue-query': { output: './src/ds/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ds/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ds/hooks/angular-query.ts' },
  docs: {
    output: './src/ds/api.md',
    curl: true,
    baseUrl: 'https://ds.us-east-1.amazonaws.com',
  },
})
