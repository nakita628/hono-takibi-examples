import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Meetings/Rollouts/321895/2026-09/meetings.json',
  output: './src/crm-meetings/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-meetings/types.ts' },
  client: { output: './src/crm-meetings/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-meetings/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-meetings/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-meetings/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-meetings/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-meetings/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-meetings/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-meetings/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-meetings/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-meetings/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
