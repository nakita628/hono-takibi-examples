import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Listings/Rollouts/321895/2026-09/listings.json',
  output: './src/crm-listings/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-listings/types.ts' },
  client: { output: './src/crm-listings/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-listings/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-listings/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-listings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-listings/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-listings/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-listings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-listings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-listings/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-listings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
