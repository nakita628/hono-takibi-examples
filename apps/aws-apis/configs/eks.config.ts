import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/APIs-guru/openapi-directory/main/APIs/amazonaws.com/eks/2017-11-01/openapi.yaml',
  output: './src/eks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/eks/types.ts' },
  client: { output: './src/eks/client.ts', baseUrl: '/' },
  rpc: { output: './src/eks/rpc.ts', parseResponse: true },
  swr: { output: './src/eks/hooks/swr.ts' },
  'tanstack-query': { output: './src/eks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/eks/hooks/preact-query.ts' },
  'solid-query': { output: './src/eks/hooks/solid-query.ts' },
  'vue-query': { output: './src/eks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/eks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/eks/hooks/angular-query.ts' },
  docs: {
    output: './src/eks/api.md',
    curl: true,
    baseUrl: 'https://eks.us-east-1.amazonaws.com',
  },
})
