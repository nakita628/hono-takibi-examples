import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Commerce/Price%20Books/Rollouts/310989/2026-09/priceBooks.json',
  output: './src/commerce-price-books/routes.ts',
  template: {},
  type: { output: './src/commerce-price-books/types.ts' },
  client: { output: './src/commerce-price-books/client.ts', baseUrl: '/' },
  rpc: { output: './src/commerce-price-books/rpc.ts', parseResponse: true },
  swr: { output: './src/commerce-price-books/hooks/swr.ts' },
  'tanstack-query': { output: './src/commerce-price-books/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/commerce-price-books/hooks/preact-query.ts' },
  'solid-query': { output: './src/commerce-price-books/hooks/solid-query.ts' },
  'vue-query': { output: './src/commerce-price-books/hooks/vue-query.ts' },
  'svelte-query': { output: './src/commerce-price-books/hooks/svelte-query.ts' },
  'angular-query': { output: './src/commerce-price-books/hooks/angular-query.ts' },
  docs: {
    output: './src/commerce-price-books/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
