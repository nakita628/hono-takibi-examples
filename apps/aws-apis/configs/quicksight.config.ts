import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/quicksight/2018-04-01/openapi.yaml',
  output: './src/quicksight/routes.ts',
  template: {},
  type: { output: './src/quicksight/types.ts' },
  client: { output: './src/quicksight/client.ts', baseUrl: '/' },
  rpc: { output: './src/quicksight/rpc.ts', parseResponse: true },
  swr: { output: './src/quicksight/hooks/swr.ts' },
  'tanstack-query': { output: './src/quicksight/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/quicksight/hooks/preact-query.ts' },
  'solid-query': { output: './src/quicksight/hooks/solid-query.ts' },
  'vue-query': { output: './src/quicksight/hooks/vue-query.ts' },
  'svelte-query': { output: './src/quicksight/hooks/svelte-query.ts' },
  'angular-query': { output: './src/quicksight/hooks/angular-query.ts' },
  docs: {
    output: './src/quicksight/api.md',
    curl: true,
    baseUrl: 'https://quicksight.us-east-1.amazonaws.com',
  },
})
