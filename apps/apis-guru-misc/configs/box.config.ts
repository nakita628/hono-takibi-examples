import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/box.com/2.0.0/openapi.yaml',
  output: './src/box/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/box/types.ts' },
  client: { output: './src/box/client.ts', baseUrl: '/' },
  rpc: { output: './src/box/rpc.ts', parseResponse: true },
  swr: { output: './src/box/hooks/swr.ts' },
  'tanstack-query': { output: './src/box/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/box/hooks/preact-query.ts' },
  'solid-query': { output: './src/box/hooks/solid-query.ts' },
  'vue-query': { output: './src/box/hooks/vue-query.ts' },
  'svelte-query': { output: './src/box/hooks/svelte-query.ts' },
  'angular-query': { output: './src/box/hooks/angular-query.ts' },
  docs: {
    output: './src/box/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
