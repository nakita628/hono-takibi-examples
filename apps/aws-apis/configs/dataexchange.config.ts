import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/dataexchange/2017-07-25/openapi.yaml',
  output: './src/dataexchange/routes.ts',
  template: {},
  type: { output: './src/dataexchange/types.ts' },
  client: { output: './src/dataexchange/client.ts', baseUrl: '/' },
  rpc: { output: './src/dataexchange/rpc.ts', parseResponse: true },
  swr: { output: './src/dataexchange/hooks/swr.ts' },
  'tanstack-query': { output: './src/dataexchange/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/dataexchange/hooks/preact-query.ts' },
  'solid-query': { output: './src/dataexchange/hooks/solid-query.ts' },
  'vue-query': { output: './src/dataexchange/hooks/vue-query.ts' },
  'svelte-query': { output: './src/dataexchange/hooks/svelte-query.ts' },
  'angular-query': { output: './src/dataexchange/hooks/angular-query.ts' },
  docs: {
    output: './src/dataexchange/api.md',
    curl: true,
    baseUrl: 'https://dataexchange.us-east-1.amazonaws.com',
  },
})
