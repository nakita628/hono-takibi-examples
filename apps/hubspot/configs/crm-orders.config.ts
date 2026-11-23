import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Orders/Rollouts/321895/2026-09/orders.json',
  output: './src/crm-orders/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-orders/types.ts' },
  client: { output: './src/crm-orders/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-orders/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-orders/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-orders/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-orders/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-orders/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-orders/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-orders/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-orders/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-orders/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
