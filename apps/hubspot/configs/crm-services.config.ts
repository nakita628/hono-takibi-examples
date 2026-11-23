import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Services/Rollouts/321895/2026-09/services.json',
  output: './src/crm-services/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-services/types.ts' },
  client: { output: './src/crm-services/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-services/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-services/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-services/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-services/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-services/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-services/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-services/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-services/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-services/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
