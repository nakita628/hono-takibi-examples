import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/query/v1/query.openapi.yaml',
  output: './src/query-v1-query/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/query-v1-query/types.ts' },
  client: { output: './src/query-v1-query/client.ts', baseUrl: '/' },
  rpc: { output: './src/query-v1-query/rpc.ts', parseResponse: true },
  swr: { output: './src/query-v1-query/hooks/swr.ts' },
  'tanstack-query': { output: './src/query-v1-query/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/query-v1-query/hooks/preact-query.ts' },
  'solid-query': { output: './src/query-v1-query/hooks/solid-query.ts' },
  'vue-query': { output: './src/query-v1-query/hooks/vue-query.ts' },
  'svelte-query': { output: './src/query-v1-query/hooks/svelte-query.ts' },
  'angular-query': { output: './src/query-v1-query/hooks/angular-query.ts' },
  docs: {
    output: './src/query-v1-query/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
