import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Projects/Rollouts/321895/2026-09/projects.json',
  output: './src/crm-projects/routes.ts',
  template: {},
  type: { output: './src/crm-projects/types.ts' },
  client: { output: './src/crm-projects/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-projects/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-projects/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-projects/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-projects/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-projects/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-projects/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-projects/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-projects/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-projects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
