import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Taxes/Rollouts/321895/2026-09/taxes.json',
  output: './src/crm-taxes/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-taxes/types.ts' },
  client: { output: './src/crm-taxes/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-taxes/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-taxes/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-taxes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-taxes/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-taxes/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-taxes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-taxes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-taxes/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-taxes/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
