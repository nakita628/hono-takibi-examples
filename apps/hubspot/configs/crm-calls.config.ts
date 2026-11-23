import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Calls/Rollouts/321895/2026-09/calls.json',
  output: './src/crm-calls/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-calls/types.ts' },
  client: { output: './src/crm-calls/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-calls/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-calls/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-calls/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-calls/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-calls/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-calls/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-calls/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-calls/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-calls/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
