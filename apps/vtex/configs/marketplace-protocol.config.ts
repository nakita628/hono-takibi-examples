import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Marketplace-Protocol/1.0/openapi.yaml',
  output: './src/marketplace-protocol/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/marketplace-protocol/types.ts' },
  client: { output: './src/marketplace-protocol/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketplace-protocol/rpc.ts', parseResponse: true },
  swr: { output: './src/marketplace-protocol/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketplace-protocol/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketplace-protocol/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketplace-protocol/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketplace-protocol/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketplace-protocol/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketplace-protocol/hooks/angular-query.ts' },
  docs: {
    output: './src/marketplace-protocol/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
