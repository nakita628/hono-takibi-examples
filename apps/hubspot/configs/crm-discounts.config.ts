import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Discounts/Rollouts/321895/2026-09/discounts.json',
  output: './src/crm-discounts/routes.ts',
  template: {},
  type: { output: './src/crm-discounts/types.ts' },
  client: { output: './src/crm-discounts/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-discounts/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-discounts/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-discounts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-discounts/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-discounts/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-discounts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-discounts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-discounts/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-discounts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
