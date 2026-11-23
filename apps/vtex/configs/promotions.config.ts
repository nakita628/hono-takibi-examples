import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Promotions-/1.0/openapi.yaml',
  output: './src/promotions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/promotions/types.ts' },
  client: { output: './src/promotions/client.ts', baseUrl: '/' },
  rpc: { output: './src/promotions/rpc.ts', parseResponse: true },
  swr: { output: './src/promotions/hooks/swr.ts' },
  'tanstack-query': { output: './src/promotions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/promotions/hooks/preact-query.ts' },
  'solid-query': { output: './src/promotions/hooks/solid-query.ts' },
  'vue-query': { output: './src/promotions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/promotions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/promotions/hooks/angular-query.ts' },
  docs: {
    output: './src/promotions/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
