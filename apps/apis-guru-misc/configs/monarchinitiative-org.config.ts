import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/monarchinitiative.org/1.1.14/openapi.yaml',
  output: './src/monarchinitiative-org/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/monarchinitiative-org/types.ts' },
  client: { output: './src/monarchinitiative-org/client.ts', baseUrl: '/' },
  rpc: { output: './src/monarchinitiative-org/rpc.ts', parseResponse: true },
  swr: { output: './src/monarchinitiative-org/hooks/swr.ts' },
  'tanstack-query': { output: './src/monarchinitiative-org/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/monarchinitiative-org/hooks/preact-query.ts' },
  'solid-query': { output: './src/monarchinitiative-org/hooks/solid-query.ts' },
  'vue-query': { output: './src/monarchinitiative-org/hooks/vue-query.ts' },
  'svelte-query': { output: './src/monarchinitiative-org/hooks/svelte-query.ts' },
  'angular-query': { output: './src/monarchinitiative-org/hooks/angular-query.ts' },
  docs: {
    output: './src/monarchinitiative-org/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
