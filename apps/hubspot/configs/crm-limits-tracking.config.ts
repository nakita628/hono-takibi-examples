import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Limits%20Tracking/Rollouts/199890/2026-09/limitsTracking.json',
  output: './src/crm-limits-tracking/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-limits-tracking/types.ts' },
  client: { output: './src/crm-limits-tracking/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-limits-tracking/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-limits-tracking/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-limits-tracking/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-limits-tracking/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-limits-tracking/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-limits-tracking/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-limits-tracking/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-limits-tracking/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-limits-tracking/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
