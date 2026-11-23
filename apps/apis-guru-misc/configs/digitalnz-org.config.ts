import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/digitalnz.org/3/openapi.yaml',
  output: './src/digitalnz-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/digitalnz-org/types.ts' },
  client: { output: './src/digitalnz-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/digitalnz-org/rpc.ts', parseResponse: true },
  swr: { output: './src/digitalnz-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/digitalnz-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/digitalnz-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/digitalnz-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/digitalnz-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/digitalnz-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/digitalnz-org/hooks/angular-query.ts' },
  docs: {
    output: './src/digitalnz-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
