import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/grafana/pyroscope/main/api/connect-openapi/gen/storegateway/v1/storegateway.openapi.yaml',
  output: './src/storegateway-v1-storegateway/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/storegateway-v1-storegateway/types.ts' },
  client: { output: './src/storegateway-v1-storegateway/client.ts', baseUrl: '/' },
  rpc: { output: './src/storegateway-v1-storegateway/rpc.ts', parseResponse: true },
  swr: { output: './src/storegateway-v1-storegateway/hooks/swr.ts' },
  'tanstack-query': { output: './src/storegateway-v1-storegateway/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/storegateway-v1-storegateway/hooks/preact-query.ts' },
  'solid-query': { output: './src/storegateway-v1-storegateway/hooks/solid-query.ts' },
  'vue-query': { output: './src/storegateway-v1-storegateway/hooks/vue-query.ts' },
  'svelte-query': { output: './src/storegateway-v1-storegateway/hooks/svelte-query.ts' },
  'angular-query': { output: './src/storegateway-v1-storegateway/hooks/angular-query.ts' },
  docs: {
    output: './src/storegateway-v1-storegateway/api.md',
    curl: true,
    baseUrl: 'http://localhost:4040',
  },
})
