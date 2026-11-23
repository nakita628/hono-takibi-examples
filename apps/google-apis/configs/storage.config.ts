import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/storage/v1/openapi.yaml',
  output: './src/storage/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/storage/types.ts' },
  client: { output: './src/storage/client.ts', baseUrl: '/' },
  rpc: { output: './src/storage/rpc.ts', parseResponse: true },
  swr: { output: './src/storage/hooks/swr.ts' },
  'tanstack-query': { output: './src/storage/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/storage/hooks/preact-query.ts' },
  'solid-query': { output: './src/storage/hooks/solid-query.ts' },
  'vue-query': { output: './src/storage/hooks/vue-query.ts' },
  'svelte-query': { output: './src/storage/hooks/svelte-query.ts' },
  'angular-query': { output: './src/storage/hooks/angular-query.ts' },
  docs: {
    output: './src/storage/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
