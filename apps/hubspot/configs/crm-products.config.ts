import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Products/Rollouts/321895/2026-09/products.json',
  output: './src/crm-products/routes.ts',
  template: {},
  type: { output: './src/crm-products/types.ts' },
  client: { output: './src/crm-products/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-products/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-products/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-products/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-products/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-products/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-products/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-products/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-products/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-products/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
