import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Data Repository Service, official OpenAPI spec:
  // https://github.com/ga4gh/data-repository-service-schemas/blob/3a0f149a5ed835b718d2a80d96fd1f04e5d22014/openapi/data_repository_service.openapi.yaml
  input: 'https://raw.githubusercontent.com/ga4gh/data-repository-service-schemas/develop/openapi/data_repository_service.openapi.yaml',
  output: './src/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/types.ts' },
  client: { output: './src/client.ts', baseUrl: '/' },
  rpc: { output: './src/rpc.ts', parseResponse: true },
  swr: { output: './src/hooks/swr.ts' },
  'tanstack-query': { output: './src/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/hooks/preact-query.ts' },
  'solid-query': { output: './src/hooks/solid-query.ts' },
  'vue-query': { output: './src/hooks/vue-query.ts' },
  'svelte-query': { output: './src/hooks/svelte-query.ts' },
  'angular-query': { output: './src/hooks/angular-query.ts' },
  docs: {
    output: './src/api.md',
    curl: true,
    baseUrl: 'http://localhost:8080',
  },
})
