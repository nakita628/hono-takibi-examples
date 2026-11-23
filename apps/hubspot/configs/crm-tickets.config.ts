import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Tickets/Rollouts/321895/2026-09/tickets.json',
  output: './src/crm-tickets/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-tickets/types.ts' },
  client: { output: './src/crm-tickets/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-tickets/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-tickets/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-tickets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-tickets/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-tickets/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-tickets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-tickets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-tickets/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-tickets/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
