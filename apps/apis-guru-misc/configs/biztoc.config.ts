import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/biztoc.com/v1/openapi.yaml',
  output: './src/biztoc/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/biztoc/types.ts' },
  client: { output: './src/biztoc/client.ts', baseUrl: '/' },
  rpc: { output: './src/biztoc/rpc.ts', parseResponse: true },
  swr: { output: './src/biztoc/hooks/swr.ts' },
  'tanstack-query': { output: './src/biztoc/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/biztoc/hooks/preact-query.ts' },
  'solid-query': { output: './src/biztoc/hooks/solid-query.ts' },
  'vue-query': { output: './src/biztoc/hooks/vue-query.ts' },
  'svelte-query': { output: './src/biztoc/hooks/svelte-query.ts' },
  'angular-query': { output: './src/biztoc/hooks/angular-query.ts' },
  docs: {
    output: './src/biztoc/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
