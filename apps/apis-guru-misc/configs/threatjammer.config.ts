import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/threatjammer.com/1.2.20/openapi.yaml',
  output: './src/threatjammer/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/threatjammer/types.ts' },
  client: { output: './src/threatjammer/client.ts', baseUrl: '/' },
  rpc: { output: './src/threatjammer/rpc.ts', parseResponse: true },
  swr: { output: './src/threatjammer/hooks/swr.ts' },
  'tanstack-query': { output: './src/threatjammer/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/threatjammer/hooks/preact-query.ts' },
  'solid-query': { output: './src/threatjammer/hooks/solid-query.ts' },
  'vue-query': { output: './src/threatjammer/hooks/vue-query.ts' },
  'svelte-query': { output: './src/threatjammer/hooks/svelte-query.ts' },
  'angular-query': { output: './src/threatjammer/hooks/angular-query.ts' },
  docs: {
    output: './src/threatjammer/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
