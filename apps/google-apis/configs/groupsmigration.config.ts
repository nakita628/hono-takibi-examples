import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/groupsmigration/v1/openapi.yaml',
  output: './src/groupsmigration/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/groupsmigration/types.ts' },
  client: { output: './src/groupsmigration/client.ts', baseUrl: '/' },
  rpc: { output: './src/groupsmigration/rpc.ts', parseResponse: true },
  swr: { output: './src/groupsmigration/hooks/swr.ts' },
  'tanstack-query': { output: './src/groupsmigration/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/groupsmigration/hooks/preact-query.ts' },
  'solid-query': { output: './src/groupsmigration/hooks/solid-query.ts' },
  'vue-query': { output: './src/groupsmigration/hooks/vue-query.ts' },
  'svelte-query': { output: './src/groupsmigration/hooks/svelte-query.ts' },
  'angular-query': { output: './src/groupsmigration/hooks/angular-query.ts' },
  docs: {
    output: './src/groupsmigration/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
