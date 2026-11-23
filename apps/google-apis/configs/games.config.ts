import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/games/v1/openapi.yaml',
  output: './src/games/routes.ts',
  template: {},
  type: { output: './src/games/types.ts' },
  client: { output: './src/games/client.ts', baseUrl: '/' },
  rpc: { output: './src/games/rpc.ts', parseResponse: true },
  swr: { output: './src/games/hooks/swr.ts' },
  'tanstack-query': { output: './src/games/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/games/hooks/preact-query.ts' },
  'solid-query': { output: './src/games/hooks/solid-query.ts' },
  'vue-query': { output: './src/games/hooks/vue-query.ts' },
  'svelte-query': { output: './src/games/hooks/svelte-query.ts' },
  'angular-query': { output: './src/games/hooks/angular-query.ts' },
  docs: {
    output: './src/games/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
