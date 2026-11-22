import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Commerce%20Payments/Rollouts/321895/2026-09/commercePayments.json',
  output: './src/crm-commerce-payments/routes.ts',
  template: {},
  type: { output: './src/crm-commerce-payments/types.ts' },
  client: { output: './src/crm-commerce-payments/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-commerce-payments/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-commerce-payments/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-commerce-payments/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-commerce-payments/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-commerce-payments/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-commerce-payments/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-commerce-payments/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-commerce-payments/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-commerce-payments/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
