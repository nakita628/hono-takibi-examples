import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/wikipathways.org/1.0/openapi.yaml',
  output: './src/wikipathways-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/wikipathways-org/types.ts' },
  client: { output: './src/wikipathways-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/wikipathways-org/rpc.ts', parseResponse: true },
  swr: { output: './src/wikipathways-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/wikipathways-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/wikipathways-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/wikipathways-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/wikipathways-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/wikipathways-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/wikipathways-org/hooks/angular-query.ts' },
  docs: {
    output: './src/wikipathways-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
