import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Partner%20Clients/Rollouts/321895/2026-09/partnerClients.json',
  output: './src/crm-partner-clients/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-partner-clients/types.ts' },
  client: { output: './src/crm-partner-clients/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-partner-clients/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-partner-clients/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-partner-clients/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-partner-clients/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-partner-clients/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-partner-clients/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-partner-clients/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-partner-clients/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-partner-clients/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
