import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/parliament.uk/lordsvotes/v1/openapi.yaml',
  output: './src/lordsvotes/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/lordsvotes/types.ts' },
  client: { output: './src/lordsvotes/client.ts', baseUrl: '/' },
  rpc: { output: './src/lordsvotes/rpc.ts', parseResponse: true },
  swr: { output: './src/lordsvotes/hooks/swr.ts' },
  'tanstack-query': { output: './src/lordsvotes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/lordsvotes/hooks/preact-query.ts' },
  'solid-query': { output: './src/lordsvotes/hooks/solid-query.ts' },
  'vue-query': { output: './src/lordsvotes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/lordsvotes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/lordsvotes/hooks/angular-query.ts' },
  docs: {
    output: './src/lordsvotes/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
