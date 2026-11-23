import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://api.apis.guru/v2/specs/googleapis.com/authorizedbuyersmarketplace/v1/openapi.yaml',
  output: './src/authorizedbuyersmarketplace/routes.ts',
  template: {},
  type: { output: './src/authorizedbuyersmarketplace/types.ts' },
  client: { output: './src/authorizedbuyersmarketplace/client.ts', baseUrl: '/' },
  rpc: { output: './src/authorizedbuyersmarketplace/rpc.ts', parseResponse: true },
  swr: { output: './src/authorizedbuyersmarketplace/hooks/swr.ts' },
  'tanstack-query': { output: './src/authorizedbuyersmarketplace/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/authorizedbuyersmarketplace/hooks/preact-query.ts' },
  'solid-query': { output: './src/authorizedbuyersmarketplace/hooks/solid-query.ts' },
  'vue-query': { output: './src/authorizedbuyersmarketplace/hooks/vue-query.ts' },
  'svelte-query': { output: './src/authorizedbuyersmarketplace/hooks/svelte-query.ts' },
  'angular-query': { output: './src/authorizedbuyersmarketplace/hooks/angular-query.ts' },
  docs: {
    output: './src/authorizedbuyersmarketplace/api.md',
    curl: true,
    baseUrl: 'https://www.googleapis.com',
  },
})
