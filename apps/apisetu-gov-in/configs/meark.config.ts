import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/apisetu.gov.in/meark/3.0.0/openapi.yaml',
  output: './src/meark/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/meark/types.ts' },
  client: { output: './src/meark/client.ts', baseUrl: '/' },
  rpc: { output: './src/meark/rpc.ts', parseResponse: true },
  swr: { output: './src/meark/hooks/swr.ts' },
  'tanstack-query': { output: './src/meark/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meark/hooks/preact-query.ts' },
  'solid-query': { output: './src/meark/hooks/solid-query.ts' },
  'vue-query': { output: './src/meark/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meark/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meark/hooks/angular-query.ts' },
  docs: {
    output: './src/meark/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
