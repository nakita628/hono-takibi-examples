import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/vision/v1p1beta1/openapi.yaml',
  output: './src/vision/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vision/types.ts' },
  client: { output: './src/vision/client.ts', baseUrl: '/' },
  rpc: { output: './src/vision/rpc.ts', parseResponse: true },
  swr: { output: './src/vision/hooks/swr.ts' },
  'tanstack-query': { output: './src/vision/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vision/hooks/preact-query.ts' },
  'solid-query': { output: './src/vision/hooks/solid-query.ts' },
  'vue-query': { output: './src/vision/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vision/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vision/hooks/angular-query.ts' },
  docs: {
    output: './src/vision/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
