import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Contracts/Rollouts/321895/2026-09/contracts.json',
  output: './src/crm-contracts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-contracts/types.ts' },
  client: { output: './src/crm-contracts/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-contracts/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-contracts/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-contracts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-contracts/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-contracts/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-contracts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-contracts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-contracts/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-contracts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
