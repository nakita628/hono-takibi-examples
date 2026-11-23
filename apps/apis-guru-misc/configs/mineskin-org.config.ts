import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/mineskin.org/1.0.0/openapi.yaml',
  output: './src/mineskin-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/mineskin-org/types.ts' },
  client: { output: './src/mineskin-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/mineskin-org/rpc.ts', parseResponse: true },
  swr: { output: './src/mineskin-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/mineskin-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/mineskin-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/mineskin-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/mineskin-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/mineskin-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/mineskin-org/hooks/angular-query.ts' },
  docs: {
    output: './src/mineskin-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
