import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Deal%20Splits/Rollouts/157885/2026-09/dealSplits.json',
  output: './src/crm-deal-splits/routes.ts',
  template: {},
  type: { output: './src/crm-deal-splits/types.ts' },
  client: { output: './src/crm-deal-splits/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-deal-splits/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-deal-splits/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-deal-splits/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-deal-splits/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-deal-splits/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-deal-splits/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-deal-splits/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-deal-splits/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-deal-splits/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
