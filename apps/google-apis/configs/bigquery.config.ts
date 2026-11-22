import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/bigquery/v2/openapi.yaml',
  output: './src/bigquery/routes.ts',
  template: {},
  type: { output: './src/bigquery/types.ts' },
  client: { output: './src/bigquery/client.ts', baseUrl: '/' },
  rpc: { output: './src/bigquery/rpc.ts', parseResponse: true },
  swr: { output: './src/bigquery/hooks/swr.ts' },
  'tanstack-query': { output: './src/bigquery/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bigquery/hooks/preact-query.ts' },
  'solid-query': { output: './src/bigquery/hooks/solid-query.ts' },
  'vue-query': { output: './src/bigquery/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bigquery/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bigquery/hooks/angular-query.ts' },
  docs: {
    output: './src/bigquery/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
