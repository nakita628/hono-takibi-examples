import { defineConfig } from 'hono-takibi'

export default defineConfig({
  // Manticore Search, official OpenAPI spec:
  // https://github.com/manticoresoftware/openapi/blob/8d0eeff3d66204e9735dfd3ebc757b15c47f7a0a/manticore.yml
  input: 'https://raw.githubusercontent.com/manticoresoftware/openapi/master/manticore.yml',
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
    baseUrl: 'http://127.0.0.1:9308',
  },
})
