import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/playablelocations/v3/openapi.yaml',
  output: './src/playablelocations/routes.ts',
  template: {},
  type: { output: './src/playablelocations/types.ts' },
  client: { output: './src/playablelocations/client.ts', baseUrl: '/' },
  rpc: { output: './src/playablelocations/rpc.ts', parseResponse: true },
  swr: { output: './src/playablelocations/hooks/swr.ts' },
  'tanstack-query': { output: './src/playablelocations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/playablelocations/hooks/preact-query.ts' },
  'solid-query': { output: './src/playablelocations/hooks/solid-query.ts' },
  'vue-query': { output: './src/playablelocations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/playablelocations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/playablelocations/hooks/angular-query.ts' },
  docs: {
    output: './src/playablelocations/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
