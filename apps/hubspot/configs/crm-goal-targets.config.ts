import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Goal%20Targets/Rollouts/321895/2026-09/goalTargets.json',
  output: './src/crm-goal-targets/routes.ts',
  template: {},
  type: { output: './src/crm-goal-targets/types.ts' },
  client: { output: './src/crm-goal-targets/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-goal-targets/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-goal-targets/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-goal-targets/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-goal-targets/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-goal-targets/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-goal-targets/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-goal-targets/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-goal-targets/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-goal-targets/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
