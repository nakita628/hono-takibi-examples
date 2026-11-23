import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Price%20Book%20Items%20Crm%20Reads%20Api/Rollouts/310989/2026-09/priceBookItemsCrmReadsApi.json',
  output: './src/crm-price-book-items-crm-reads-api/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-price-book-items-crm-reads-api/types.ts' },
  client: { output: './src/crm-price-book-items-crm-reads-api/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-price-book-items-crm-reads-api/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-price-book-items-crm-reads-api/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-price-book-items-crm-reads-api/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-price-book-items-crm-reads-api/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-price-book-items-crm-reads-api/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-price-book-items-crm-reads-api/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-price-book-items-crm-reads-api/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-price-book-items-crm-reads-api/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-price-book-items-crm-reads-api/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
