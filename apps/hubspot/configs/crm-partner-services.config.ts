import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Partner%20Services/Rollouts/321895/2026-09/partnerServices.json',
  output: './src/crm-partner-services/routes.ts',
  template: {},
  type: { output: './src/crm-partner-services/types.ts' },
  client: { output: './src/crm-partner-services/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-partner-services/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-partner-services/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-partner-services/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-partner-services/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-partner-services/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-partner-services/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-partner-services/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-partner-services/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-partner-services/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
