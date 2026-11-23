import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/bungie.net/2.18.0/openapi.yaml',
  output: './src/bungie-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/bungie-net/types.ts' },
  client: { output: './src/bungie-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/bungie-net/rpc.ts', parseResponse: true },
  swr: { output: './src/bungie-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/bungie-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/bungie-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/bungie-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/bungie-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/bungie-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/bungie-net/hooks/angular-query.ts' },
  docs: {
    output: './src/bungie-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
