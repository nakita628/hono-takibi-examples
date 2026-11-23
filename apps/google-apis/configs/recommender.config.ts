import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/recommender/v1beta1/openapi.yaml',
  output: './src/recommender/routes.ts',
  template: {},
  type: { output: './src/recommender/types.ts' },
  client: { output: './src/recommender/client.ts', baseUrl: '/' },
  rpc: { output: './src/recommender/rpc.ts', parseResponse: true },
  swr: { output: './src/recommender/hooks/swr.ts' },
  'tanstack-query': { output: './src/recommender/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/recommender/hooks/preact-query.ts' },
  'solid-query': { output: './src/recommender/hooks/solid-query.ts' },
  'vue-query': { output: './src/recommender/hooks/vue-query.ts' },
  'svelte-query': { output: './src/recommender/hooks/svelte-query.ts' },
  'angular-query': { output: './src/recommender/hooks/angular-query.ts' },
  docs: {
    output: './src/recommender/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
