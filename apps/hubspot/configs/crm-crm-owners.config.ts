import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Crm%20Owners/Rollouts/146888/2026-09/crmOwners.json',
  output: './src/crm-crm-owners/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-crm-owners/types.ts' },
  client: { output: './src/crm-crm-owners/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-crm-owners/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-crm-owners/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-crm-owners/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-crm-owners/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-crm-owners/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-crm-owners/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-crm-owners/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-crm-owners/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-crm-owners/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
