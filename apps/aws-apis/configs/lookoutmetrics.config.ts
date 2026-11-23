import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/lookoutmetrics/2017-07-25/openapi.yaml',
  output: './src/lookoutmetrics/routes.ts',
  template: {},
  type: { output: './src/lookoutmetrics/types.ts' },
  client: { output: './src/lookoutmetrics/client.ts', baseUrl: '/' },
  rpc: { output: './src/lookoutmetrics/rpc.ts', parseResponse: true },
  swr: { output: './src/lookoutmetrics/hooks/swr.ts' },
  'tanstack-query': { output: './src/lookoutmetrics/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lookoutmetrics/hooks/preact-query.ts' },
  'solid-query': { output: './src/lookoutmetrics/hooks/solid-query.ts' },
  'vue-query': { output: './src/lookoutmetrics/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lookoutmetrics/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lookoutmetrics/hooks/angular-query.ts' },
  docs: {
    output: './src/lookoutmetrics/api.md',
    curl: true,
    baseUrl: 'https://lookoutmetrics.us-east-1.amazonaws.com',
  },
})
