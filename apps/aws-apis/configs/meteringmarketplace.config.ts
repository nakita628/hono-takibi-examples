import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/amazonaws.com/meteringmarketplace/2016-01-14/openapi.yaml',
  output: './src/meteringmarketplace/routes.ts',
  template: {},
  type: { output: './src/meteringmarketplace/types.ts' },
  client: { output: './src/meteringmarketplace/client.ts', baseUrl: '/' },
  rpc: { output: './src/meteringmarketplace/rpc.ts', parseResponse: true },
  swr: { output: './src/meteringmarketplace/hooks/swr.ts' },
  'tanstack-query': { output: './src/meteringmarketplace/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/meteringmarketplace/hooks/preact-query.ts' },
  'solid-query': { output: './src/meteringmarketplace/hooks/solid-query.ts' },
  'vue-query': { output: './src/meteringmarketplace/hooks/vue-query.ts' },
  'svelte-query': { output: './src/meteringmarketplace/hooks/svelte-query.ts' },
  'angular-query': { output: './src/meteringmarketplace/hooks/angular-query.ts' },
  docs: {
    output: './src/meteringmarketplace/api.md',
    curl: true,
    baseUrl: 'https://meteringmarketplace.us-east-1.amazonaws.com',
  },
})
