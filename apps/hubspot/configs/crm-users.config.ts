import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Users/Rollouts/321895/2026-09/users.json',
  output: './src/crm-users/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-users/types.ts' },
  client: { output: './src/crm-users/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-users/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-users/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-users/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-users/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-users/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-users/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-users/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-users/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-users/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
