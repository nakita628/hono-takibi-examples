import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/mirror/v1/openapi.yaml',
  output: './src/mirror/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mirror/types.ts' },
  client: { output: './src/mirror/client.ts', baseUrl: '/' },
  rpc: { output: './src/mirror/rpc.ts', parseResponse: true },
  swr: { output: './src/mirror/hooks/swr.ts' },
  'tanstack-query': { output: './src/mirror/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mirror/hooks/preact-query.ts' },
  'solid-query': { output: './src/mirror/hooks/solid-query.ts' },
  'vue-query': { output: './src/mirror/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mirror/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mirror/hooks/angular-query.ts' },
  docs: {
    output: './src/mirror/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
