import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/symanto.net/1.0/openapi.yaml',
  output: './src/symanto-net/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/symanto-net/types.ts' },
  client: { output: './src/symanto-net/client.ts', baseUrl: '/' },
  rpc: { output: './src/symanto-net/rpc.ts', parseResponse: true },
  swr: { output: './src/symanto-net/hooks/swr.ts' },
  'tanstack-query': { output: './src/symanto-net/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/symanto-net/hooks/preact-query.ts' },
  'solid-query': { output: './src/symanto-net/hooks/solid-query.ts' },
  'vue-query': { output: './src/symanto-net/hooks/vue-query.ts' },
  'svelte-query': { output: './src/symanto-net/hooks/svelte-query.ts' },
  'angular-query': { output: './src/symanto-net/hooks/angular-query.ts' },
  docs: {
    output: './src/symanto-net/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
