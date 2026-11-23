import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Deals/Rollouts/321895/2026-09/deals.json',
  output: './src/crm-deals/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-deals/types.ts' },
  client: { output: './src/crm-deals/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-deals/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-deals/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-deals/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-deals/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-deals/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-deals/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-deals/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-deals/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-deals/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
