import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Marketplace-APIs-/1.0/openapi.yaml',
  output: './src/marketplace-apis-2/routes.ts',
  template: {},
  type: { output: './src/marketplace-apis-2/types.ts' },
  client: { output: './src/marketplace-apis-2/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketplace-apis-2/rpc.ts', parseResponse: true },
  swr: { output: './src/marketplace-apis-2/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketplace-apis-2/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketplace-apis-2/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketplace-apis-2/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketplace-apis-2/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketplace-apis-2/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketplace-apis-2/hooks/angular-query.ts' },
  docs: {
    output: './src/marketplace-apis-2/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
