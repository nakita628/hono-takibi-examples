import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gamesManagement/v1management/openapi.yaml',
  output: './src/gamesmanagement/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/gamesmanagement/types.ts' },
  client: { output: './src/gamesmanagement/client.ts', baseUrl: '/' },
  rpc: { output: './src/gamesmanagement/rpc.ts', parseResponse: true },
  swr: { output: './src/gamesmanagement/hooks/swr.ts' },
  'tanstack-query': { output: './src/gamesmanagement/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gamesmanagement/hooks/preact-query.ts' },
  'solid-query': { output: './src/gamesmanagement/hooks/solid-query.ts' },
  'vue-query': { output: './src/gamesmanagement/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gamesmanagement/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gamesmanagement/hooks/angular-query.ts' },
  docs: {
    output: './src/gamesmanagement/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
