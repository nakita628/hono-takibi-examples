import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/VTEX-Do-API/1.0/openapi.yaml',
  output: './src/vtex-do-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/vtex-do-api/types.ts' },
  client: { output: './src/vtex-do-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/vtex-do-api/rpc.ts', parseResponse: true },
  swr: { output: './src/vtex-do-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/vtex-do-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/vtex-do-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/vtex-do-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/vtex-do-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/vtex-do-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/vtex-do-api/hooks/angular-query.ts' },
  docs: {
    output: './src/vtex-do-api/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
