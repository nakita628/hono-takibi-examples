import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/here.com/positioning/2.1.1/openapi.yaml',
  output: './src/here-positioning/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/here-positioning/types.ts' },
  client: { output: './src/here-positioning/client.ts', baseUrl: '/' },
  rpc: { output: './src/here-positioning/rpc.ts', parseResponse: true },
  swr: { output: './src/here-positioning/hooks/swr.ts' },
  'tanstack-query': { output: './src/here-positioning/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/here-positioning/hooks/preact-query.ts' },
  'solid-query': { output: './src/here-positioning/hooks/solid-query.ts' },
  'vue-query': { output: './src/here-positioning/hooks/vue-query.ts' },
  'svelte-query': { output: './src/here-positioning/hooks/svelte-query.ts' },
  'angular-query': { output: './src/here-positioning/hooks/angular-query.ts' },
  docs: {
    output: './src/here-positioning/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
