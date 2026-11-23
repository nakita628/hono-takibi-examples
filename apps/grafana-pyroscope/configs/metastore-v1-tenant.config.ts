import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/metastore/v1/tenant.openapi.yaml',
  output: './src/metastore-v1-tenant/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/metastore-v1-tenant/types.ts' },
  client: { output: './src/metastore-v1-tenant/client.ts', baseUrl: '/' },
  rpc: { output: './src/metastore-v1-tenant/rpc.ts', parseResponse: true },
  swr: { output: './src/metastore-v1-tenant/hooks/swr.ts' },
  'tanstack-query': { output: './src/metastore-v1-tenant/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/metastore-v1-tenant/hooks/preact-query.ts' },
  'solid-query': { output: './src/metastore-v1-tenant/hooks/solid-query.ts' },
  'vue-query': { output: './src/metastore-v1-tenant/hooks/vue-query.ts' },
  'svelte-query': { output: './src/metastore-v1-tenant/hooks/svelte-query.ts' },
  'angular-query': { output: './src/metastore-v1-tenant/hooks/angular-query.ts' },
  docs: {
    output: './src/metastore-v1-tenant/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
