import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Leads/Rollouts/321895/2026-09/leads.json',
  output: './src/crm-leads/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-leads/types.ts' },
  client: { output: './src/crm-leads/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-leads/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-leads/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-leads/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-leads/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-leads/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-leads/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-leads/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-leads/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-leads/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
