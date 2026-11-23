import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/marketplace-catalog/2018-09-17/openapi.yaml',
  output: './src/marketplace-catalog/routes.ts',
  template: {},
  type: { output: './src/marketplace-catalog/types.ts' },
  client: { output: './src/marketplace-catalog/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketplace-catalog/rpc.ts', parseResponse: true },
  swr: { output: './src/marketplace-catalog/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketplace-catalog/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketplace-catalog/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketplace-catalog/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketplace-catalog/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketplace-catalog/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketplace-catalog/hooks/angular-query.ts' },
  docs: {
    output: './src/marketplace-catalog/api.md',
    curl: true,
    baseUrl: 'https://marketplace-catalog.us-east-1.amazonaws.com',
  },
})
