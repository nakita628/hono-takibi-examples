import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/recommendationengine/v1beta1/openapi.yaml',
  output: './src/recommendationengine/routes.ts',
  template: {},
  type: { output: './src/recommendationengine/types.ts' },
  client: { output: './src/recommendationengine/client.ts', baseUrl: '/' },
  rpc: { output: './src/recommendationengine/rpc.ts', parseResponse: true },
  swr: { output: './src/recommendationengine/hooks/swr.ts' },
  'tanstack-query': { output: './src/recommendationengine/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/recommendationengine/hooks/preact-query.ts' },
  'solid-query': { output: './src/recommendationengine/hooks/solid-query.ts' },
  'vue-query': { output: './src/recommendationengine/hooks/vue-query.ts' },
  'svelte-query': { output: './src/recommendationengine/hooks/svelte-query.ts' },
  'angular-query': { output: './src/recommendationengine/hooks/angular-query.ts' },
  docs: {
    output: './src/recommendationengine/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
