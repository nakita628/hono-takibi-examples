import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/videointelligence/v1p3beta1/openapi.yaml',
  output: './src/videointelligence/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/videointelligence/types.ts' },
  client: { output: './src/videointelligence/client.ts', baseUrl: '/' },
  rpc: { output: './src/videointelligence/rpc.ts', parseResponse: true },
  swr: { output: './src/videointelligence/hooks/swr.ts' },
  'tanstack-query': { output: './src/videointelligence/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/videointelligence/hooks/preact-query.ts' },
  'solid-query': { output: './src/videointelligence/hooks/solid-query.ts' },
  'vue-query': { output: './src/videointelligence/hooks/vue-query.ts' },
  'svelte-query': { output: './src/videointelligence/hooks/svelte-query.ts' },
  'angular-query': { output: './src/videointelligence/hooks/angular-query.ts' },
  docs: {
    output: './src/videointelligence/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
