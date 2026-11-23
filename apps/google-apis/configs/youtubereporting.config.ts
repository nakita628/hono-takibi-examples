import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/youtubereporting/v1/openapi.yaml',
  output: './src/youtubereporting/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/youtubereporting/types.ts' },
  client: { output: './src/youtubereporting/client.ts', baseUrl: '/' },
  rpc: { output: './src/youtubereporting/rpc.ts', parseResponse: true },
  swr: { output: './src/youtubereporting/hooks/swr.ts' },
  'tanstack-query': { output: './src/youtubereporting/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/youtubereporting/hooks/preact-query.ts' },
  'solid-query': { output: './src/youtubereporting/hooks/solid-query.ts' },
  'vue-query': { output: './src/youtubereporting/hooks/vue-query.ts' },
  'svelte-query': { output: './src/youtubereporting/hooks/svelte-query.ts' },
  'angular-query': { output: './src/youtubereporting/hooks/angular-query.ts' },
  docs: {
    output: './src/youtubereporting/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
