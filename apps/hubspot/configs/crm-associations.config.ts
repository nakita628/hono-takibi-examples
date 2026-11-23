import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Associations/Rollouts/321895/2026-09/associations.json',
  output: './src/crm-associations/routes.ts',
  template: {},
  type: { output: './src/crm-associations/types.ts' },
  client: { output: './src/crm-associations/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-associations/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-associations/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-associations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-associations/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-associations/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-associations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-associations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-associations/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-associations/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
