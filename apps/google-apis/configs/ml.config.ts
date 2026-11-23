import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/ml/v1/openapi.yaml',
  output: './src/ml/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/ml/types.ts' },
  client: { output: './src/ml/client.ts', baseUrl: '/' },
  rpc: { output: './src/ml/rpc.ts', parseResponse: true },
  swr: { output: './src/ml/hooks/swr.ts' },
  'tanstack-query': { output: './src/ml/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/ml/hooks/preact-query.ts' },
  'solid-query': { output: './src/ml/hooks/solid-query.ts' },
  'vue-query': { output: './src/ml/hooks/vue-query.ts' },
  'svelte-query': { output: './src/ml/hooks/svelte-query.ts' },
  'angular-query': { output: './src/ml/hooks/angular-query.ts' },
  docs: {
    output: './src/ml/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
