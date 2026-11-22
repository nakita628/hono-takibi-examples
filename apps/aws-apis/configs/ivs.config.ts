import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/ivs/2020-07-14/openapi.yaml',
  output: './src/ivs/routes.ts',
  template: {},
  type: { output: './src/ivs/types.ts' },
  client: { output: './src/ivs/client.ts', baseUrl: '/' },
  rpc: { output: './src/ivs/rpc.ts', parseResponse: true },
  swr: { output: './src/ivs/hooks/swr.ts' },
  'tanstack-query': { output: './src/ivs/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ivs/hooks/preact-query.ts' },
  'solid-query': { output: './src/ivs/hooks/solid-query.ts' },
  'vue-query': { output: './src/ivs/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ivs/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ivs/hooks/angular-query.ts' },
  docs: {
    output: './src/ivs/api.md',
    curl: true,
    baseUrl: 'https://ivs.us-east-1.amazonaws.com',
  },
})
