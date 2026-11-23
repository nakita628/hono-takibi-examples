import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasehosting/v1beta1/openapi.yaml',
  output: './src/firebasehosting/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/firebasehosting/types.ts' },
  client: { output: './src/firebasehosting/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebasehosting/rpc.ts', parseResponse: true },
  swr: { output: './src/firebasehosting/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebasehosting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebasehosting/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebasehosting/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebasehosting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebasehosting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebasehosting/hooks/angular-query.ts' },
  docs: {
    output: './src/firebasehosting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
