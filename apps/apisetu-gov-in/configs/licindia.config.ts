import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/licindia/3.0.0/openapi.yaml',
  output: './src/licindia/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/licindia/types.ts' },
  client: { output: './src/licindia/client.ts', baseUrl: '/' },
  rpc: { output: './src/licindia/rpc.ts', parseResponse: true },
  swr: { output: './src/licindia/hooks/swr.ts' },
  'tanstack-query': { output: './src/licindia/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/licindia/hooks/preact-query.ts' },
  'solid-query': { output: './src/licindia/hooks/solid-query.ts' },
  'vue-query': { output: './src/licindia/hooks/vue-query.ts' },
  'svelte-query': { output: './src/licindia/hooks/svelte-query.ts' },
  'angular-query': { output: './src/licindia/hooks/angular-query.ts' },
  docs: {
    output: './src/licindia/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
