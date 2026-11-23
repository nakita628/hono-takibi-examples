import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Line%20Items/Rollouts/321895/2026-09/lineItems.json',
  output: './src/crm-line-items/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-line-items/types.ts' },
  client: { output: './src/crm-line-items/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-line-items/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-line-items/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-line-items/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-line-items/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-line-items/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-line-items/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-line-items/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-line-items/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-line-items/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
