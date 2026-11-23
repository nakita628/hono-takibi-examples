import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/vtex.local/Marketplace-APIs/1.0/openapi.yaml',
  output: './src/marketplace-apis/routes.ts',
  template: {},
  type: { output: './src/marketplace-apis/types.ts' },
  client: { output: './src/marketplace-apis/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketplace-apis/rpc.ts', parseResponse: true },
  swr: { output: './src/marketplace-apis/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketplace-apis/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketplace-apis/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketplace-apis/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketplace-apis/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketplace-apis/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketplace-apis/hooks/angular-query.ts' },
  docs: {
    output: './src/marketplace-apis/api.md',
    curl: true,
    baseUrl: 'https://example.com',
  },
})
