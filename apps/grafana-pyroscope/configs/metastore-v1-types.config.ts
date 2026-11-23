import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/types.openapi.yaml',
  output: './src/metastore-v1-types/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/metastore-v1-types/types.ts' },
  client: { output: './src/metastore-v1-types/client.ts', baseUrl: '/' },
  rpc: { output: './src/metastore-v1-types/rpc.ts', parseResponse: true },
  swr: { output: './src/metastore-v1-types/hooks/swr.ts' },
  'tanstack-query': { output: './src/metastore-v1-types/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/metastore-v1-types/hooks/preact-query.ts' },
  'solid-query': { output: './src/metastore-v1-types/hooks/solid-query.ts' },
  'vue-query': { output: './src/metastore-v1-types/hooks/vue-query.ts' },
  'svelte-query': { output: './src/metastore-v1-types/hooks/svelte-query.ts' },
  'angular-query': { output: './src/metastore-v1-types/hooks/angular-query.ts' },
  docs: {
    output: './src/metastore-v1-types/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
