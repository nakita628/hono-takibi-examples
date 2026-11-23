import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebaseml/v1beta2/openapi.yaml',
  output: './src/firebaseml/routes.ts',
  template: {},
  type: { output: './src/firebaseml/types.ts' },
  client: { output: './src/firebaseml/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebaseml/rpc.ts', parseResponse: true },
  swr: { output: './src/firebaseml/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebaseml/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebaseml/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebaseml/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebaseml/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebaseml/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebaseml/hooks/angular-query.ts' },
  docs: {
    output: './src/firebaseml/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
