import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Companies/Rollouts/321895/2026-09/companies.json',
  output: './src/crm-companies/routes.ts',
  template: {},
  type: { output: './src/crm-companies/types.ts' },
  client: { output: './src/crm-companies/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-companies/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-companies/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-companies/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-companies/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-companies/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-companies/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-companies/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-companies/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-companies/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
