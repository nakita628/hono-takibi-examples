import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Commerce%20Subscriptions/Rollouts/321895/2026-09/commerceSubscriptions.json',
  output: './src/crm-commerce-subscriptions/routes.ts',
  template: {},
  type: { output: './src/crm-commerce-subscriptions/types.ts' },
  client: { output: './src/crm-commerce-subscriptions/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-commerce-subscriptions/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-commerce-subscriptions/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-commerce-subscriptions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-commerce-subscriptions/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-commerce-subscriptions/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-commerce-subscriptions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-commerce-subscriptions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-commerce-subscriptions/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-commerce-subscriptions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
