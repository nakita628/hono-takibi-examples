import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Carts/Rollouts/321895/2026-09/carts.json',
  output: './src/crm-carts/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-carts/types.ts' },
  client: { output: './src/crm-carts/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-carts/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-carts/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-carts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-carts/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-carts/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-carts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-carts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-carts/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-carts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
