import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Invoices/Rollouts/321895/2026-09/invoices.json',
  output: './src/crm-invoices/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-invoices/types.ts' },
  client: { output: './src/crm-invoices/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-invoices/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-invoices/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-invoices/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-invoices/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-invoices/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-invoices/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-invoices/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-invoices/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-invoices/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
