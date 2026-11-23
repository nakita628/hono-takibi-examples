import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/kgsearch/v1/openapi.yaml',
  output: './src/kgsearch/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/kgsearch/types.ts' },
  client: { output: './src/kgsearch/client.ts', baseUrl: '/' },
  rpc: { output: './src/kgsearch/rpc.ts', parseResponse: true },
  swr: { output: './src/kgsearch/hooks/swr.ts' },
  'tanstack-query': { output: './src/kgsearch/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/kgsearch/hooks/preact-query.ts' },
  'solid-query': { output: './src/kgsearch/hooks/solid-query.ts' },
  'vue-query': { output: './src/kgsearch/hooks/vue-query.ts' },
  'svelte-query': { output: './src/kgsearch/hooks/svelte-query.ts' },
  'angular-query': { output: './src/kgsearch/hooks/angular-query.ts' },
  docs: {
    output: './src/kgsearch/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
