import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/googleapis.com/firebase/v1beta1/openapi.yaml',
  output: './src/firebase/routes.ts',
  template: {},
  type: { output: './src/firebase/types.ts' },
  client: { output: './src/firebase/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebase/rpc.ts', parseResponse: true },
  swr: { output: './src/firebase/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebase/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebase/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebase/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebase/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebase/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebase/hooks/angular-query.ts' },
  docs: {
    output: './src/firebase/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
