import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Tasks/Rollouts/321895/2026-09/tasks.json',
  output: './src/crm-tasks/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-tasks/types.ts' },
  client: { output: './src/crm-tasks/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-tasks/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-tasks/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-tasks/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-tasks/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-tasks/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-tasks/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-tasks/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-tasks/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-tasks/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
