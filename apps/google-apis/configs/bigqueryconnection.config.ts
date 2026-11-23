import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/bigqueryconnection/v1beta1/openapi.yaml',
  output: './src/bigqueryconnection/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bigqueryconnection/types.ts' },
  client: { output: './src/bigqueryconnection/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigqueryconnection/rpc.ts', parseResponse: true },
  swr: { output: './src/bigqueryconnection/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigqueryconnection/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigqueryconnection/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigqueryconnection/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigqueryconnection/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigqueryconnection/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigqueryconnection/hooks/angular-query.ts' },
  docs: {
    output: './src/bigqueryconnection/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
