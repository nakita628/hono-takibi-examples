import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/amp/2020-08-01/openapi.yaml',
  output: './src/amp/routes.ts',
  template: {},
  type: { output: './src/amp/types.ts' },
  client: { output: './src/amp/client.ts', baseUrl: '/' },
  rpc: { output: './src/amp/rpc.ts', parseResponse: true },
  swr: { output: './src/amp/hooks/swr.ts' },
  'tanstack-query': { output: './src/amp/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/amp/hooks/preact-query.ts' },
  'solid-query': { output: './src/amp/hooks/solid-query.ts' },
  'vue-query': { output: './src/amp/hooks/vue-query.ts' },
  'svelte-query': { output: './src/amp/hooks/svelte-query.ts' },
  'angular-query': { output: './src/amp/hooks/angular-query.ts' },
  docs: {
    output: './src/amp/api.md',
    curl: true,
    baseUrl: 'https://amp.us-east-1.amazonaws.com',
  },
})
