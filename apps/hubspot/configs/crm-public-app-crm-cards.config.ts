import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Public%20App%20Crm%20Cards/Rollouts/147892/2026-09/publicAppCrmCards.json',
  output: './src/crm-public-app-crm-cards/routes.ts',
  template: {},
  type: { output: './src/crm-public-app-crm-cards/types.ts' },
  client: { output: './src/crm-public-app-crm-cards/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-public-app-crm-cards/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-public-app-crm-cards/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-public-app-crm-cards/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-public-app-crm-cards/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-public-app-crm-cards/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-public-app-crm-cards/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-public-app-crm-cards/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-public-app-crm-cards/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-public-app-crm-cards/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
