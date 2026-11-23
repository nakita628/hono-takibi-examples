import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/querier/v1/querier.openapi.yaml',
  output: './src/querier-v1-querier/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/querier-v1-querier/types.ts' },
  client: { output: './src/querier-v1-querier/client.ts', baseUrl: '/' },
  rpc: { output: './src/querier-v1-querier/rpc.ts', parseResponse: true },
  swr: { output: './src/querier-v1-querier/hooks/swr.ts' },
  'tanstack-query': { output: './src/querier-v1-querier/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/querier-v1-querier/hooks/preact-query.ts' },
  'solid-query': { output: './src/querier-v1-querier/hooks/solid-query.ts' },
  'vue-query': { output: './src/querier-v1-querier/hooks/vue-query.ts' },
  'svelte-query': { output: './src/querier-v1-querier/hooks/svelte-query.ts' },
  'angular-query': { output: './src/querier-v1-querier/hooks/angular-query.ts' },
  docs: {
    output: './src/querier-v1-querier/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
