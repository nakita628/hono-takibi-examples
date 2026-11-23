import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Fees/Rollouts/321895/2026-09/fees.json',
  output: './src/crm-fees/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-fees/types.ts' },
  client: { output: './src/crm-fees/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-fees/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-fees/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-fees/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-fees/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-fees/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-fees/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-fees/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-fees/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-fees/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
