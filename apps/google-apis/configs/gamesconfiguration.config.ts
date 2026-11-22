import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/gamesConfiguration/v1configuration/openapi.yaml',
  output: './src/gamesconfiguration/routes.ts',
  template: {},
  type: { output: './src/gamesconfiguration/types.ts' },
  client: { output: './src/gamesconfiguration/client.ts', baseUrl: '/' },
  rpc: { output: './src/gamesconfiguration/rpc.ts', parseResponse: true },
  swr: { output: './src/gamesconfiguration/hooks/swr.ts' },
  'tanstack-query': { output: './src/gamesconfiguration/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/gamesconfiguration/hooks/preact-query.ts' },
  'solid-query': { output: './src/gamesconfiguration/hooks/solid-query.ts' },
  'vue-query': { output: './src/gamesconfiguration/hooks/vue-query.ts' },
  'svelte-query': { output: './src/gamesconfiguration/hooks/svelte-query.ts' },
  'angular-query': { output: './src/gamesconfiguration/hooks/angular-query.ts' },
  docs: {
    output: './src/gamesconfiguration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
