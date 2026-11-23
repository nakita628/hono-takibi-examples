import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/httpbin.org/0.9.2/openapi.yaml',
  output: './src/httpbin-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/httpbin-org/types.ts' },
  client: { output: './src/httpbin-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/httpbin-org/rpc.ts', parseResponse: true },
  swr: { output: './src/httpbin-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/httpbin-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/httpbin-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/httpbin-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/httpbin-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/httpbin-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/httpbin-org/hooks/angular-query.ts' },
  docs: {
    output: './src/httpbin-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
