import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigqueryreservation/v1beta1/openapi.yaml',
  output: './src/bigqueryreservation/routes.ts',
  template: {},
  type: { output: './src/bigqueryreservation/types.ts' },
  client: { output: './src/bigqueryreservation/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigqueryreservation/rpc.ts', parseResponse: true },
  swr: { output: './src/bigqueryreservation/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigqueryreservation/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigqueryreservation/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigqueryreservation/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigqueryreservation/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigqueryreservation/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigqueryreservation/hooks/angular-query.ts' },
  docs: {
    output: './src/bigqueryreservation/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
