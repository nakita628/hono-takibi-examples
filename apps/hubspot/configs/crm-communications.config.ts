import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Communications/Rollouts/321895/2026-09/communications.json',
  output: './src/crm-communications/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-communications/types.ts' },
  client: { output: './src/crm-communications/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-communications/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-communications/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-communications/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-communications/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-communications/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-communications/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-communications/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-communications/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-communications/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
