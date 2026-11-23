import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Tasks%20Series/Rollouts/320937/2026-09/tasksSeries.json',
  output: './src/crm-tasks-series/routes.ts',
  template: {},
  type: { output: './src/crm-tasks-series/types.ts' },
  client: { output: './src/crm-tasks-series/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-tasks-series/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-tasks-series/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-tasks-series/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-tasks-series/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-tasks-series/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-tasks-series/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-tasks-series/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-tasks-series/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-tasks-series/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
