import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Lists/Rollouts/327894/2026-09/lists.json',
  output: './src/crm-lists/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-lists/types.ts' },
  client: { output: './src/crm-lists/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-lists/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-lists/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-lists/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-lists/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-lists/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-lists/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-lists/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-lists/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-lists/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
