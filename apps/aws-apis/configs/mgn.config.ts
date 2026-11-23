import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/mgn/2020-02-26/openapi.yaml',
  output: './src/mgn/routes.ts',
  template: {},
  type: { output: './src/mgn/types.ts' },
  client: { output: './src/mgn/client.ts', baseUrl: '/' },
  rpc: { output: './src/mgn/rpc.ts', parseResponse: true },
  swr: { output: './src/mgn/hooks/swr.ts' },
  'tanstack-query': { output: './src/mgn/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mgn/hooks/preact-query.ts' },
  'solid-query': { output: './src/mgn/hooks/solid-query.ts' },
  'vue-query': { output: './src/mgn/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mgn/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mgn/hooks/angular-query.ts' },
  docs: {
    output: './src/mgn/api.md',
    curl: true,
    baseUrl: 'https://mgn.us-east-1.amazonaws.com',
  },
})
