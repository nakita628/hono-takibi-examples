import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Polaris Management Service, official OpenAPI spec:
  // https://github.com/apache/polaris/blob/5305e26e5f6629219f2305f06816e66d6d1a3898/spec/polaris-management-service.yml
  input: 'https://raw.githubusercontent.com/apache/polaris/main/spec/polaris-management-service.yml',
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
    baseUrl: 'http://localhost:8181',
  },
})
