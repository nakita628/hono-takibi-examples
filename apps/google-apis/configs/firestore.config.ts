import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/firestore/v1beta2/openapi.yaml',
  output: './src/firestore/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/firestore/types.ts' },
  client: { output: './src/firestore/client.ts', baseUrl: '/' },
  rpc: { output: './src/firestore/rpc.ts', parseResponse: true },
  swr: { output: './src/firestore/hooks/swr.ts' },
  'tanstack-query': { output: './src/firestore/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firestore/hooks/preact-query.ts' },
  'solid-query': { output: './src/firestore/hooks/solid-query.ts' },
  'vue-query': { output: './src/firestore/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firestore/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firestore/hooks/angular-query.ts' },
  docs: {
    output: './src/firestore/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
