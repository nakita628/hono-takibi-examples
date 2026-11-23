import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/compactor.openapi.yaml',
  output: './src/metastore-v1-compactor/routes.ts',
  template: {},
  type: { output: './src/metastore-v1-compactor/types.ts' },
  client: { output: './src/metastore-v1-compactor/client.ts', baseUrl: '/' },
  rpc: { output: './src/metastore-v1-compactor/rpc.ts', parseResponse: true },
  swr: { output: './src/metastore-v1-compactor/hooks/swr.ts' },
  'tanstack-query': { output: './src/metastore-v1-compactor/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/metastore-v1-compactor/hooks/preact-query.ts' },
  'solid-query': { output: './src/metastore-v1-compactor/hooks/solid-query.ts' },
  'vue-query': { output: './src/metastore-v1-compactor/hooks/vue-query.ts' },
  'svelte-query': { output: './src/metastore-v1-compactor/hooks/svelte-query.ts' },
  'angular-query': { output: './src/metastore-v1-compactor/hooks/angular-query.ts' },
  docs: {
    output: './src/metastore-v1-compactor/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
