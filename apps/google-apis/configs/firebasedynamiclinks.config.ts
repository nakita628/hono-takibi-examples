import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/firebasedynamiclinks/v1/openapi.yaml',
  output: './src/firebasedynamiclinks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/firebasedynamiclinks/types.ts' },
  client: { output: './src/firebasedynamiclinks/client.ts', baseUrl: '/' },
  rpc: { output: './src/firebasedynamiclinks/rpc.ts', parseResponse: true },
  swr: { output: './src/firebasedynamiclinks/hooks/swr.ts' },
  'tanstack-query': { output: './src/firebasedynamiclinks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/firebasedynamiclinks/hooks/preact-query.ts' },
  'solid-query': { output: './src/firebasedynamiclinks/hooks/solid-query.ts' },
  'vue-query': { output: './src/firebasedynamiclinks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/firebasedynamiclinks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/firebasedynamiclinks/hooks/angular-query.ts' },
  docs: {
    output: './src/firebasedynamiclinks/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
