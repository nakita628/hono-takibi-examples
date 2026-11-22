import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/index.openapi.yaml',
  output: './src/metastore-v1-index/routes.ts',
  template: {},
  type: { output: './src/metastore-v1-index/types.ts' },
  client: { output: './src/metastore-v1-index/client.ts', baseUrl: '/' },
  rpc: { output: './src/metastore-v1-index/rpc.ts', parseResponse: true },
  swr: { output: './src/metastore-v1-index/hooks/swr.ts' },
  'tanstack-query': { output: './src/metastore-v1-index/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/metastore-v1-index/hooks/preact-query.ts' },
  'solid-query': { output: './src/metastore-v1-index/hooks/solid-query.ts' },
  'vue-query': { output: './src/metastore-v1-index/hooks/vue-query.ts' },
  'svelte-query': { output: './src/metastore-v1-index/hooks/svelte-query.ts' },
  'angular-query': { output: './src/metastore-v1-index/hooks/angular-query.ts' },
  docs: {
    output: './src/metastore-v1-index/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
