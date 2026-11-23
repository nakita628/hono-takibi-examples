import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Exports/Rollouts/95922/2026-09/exports.json',
  output: './src/crm-exports/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-exports/types.ts' },
  client: { output: './src/crm-exports/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-exports/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-exports/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-exports/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-exports/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-exports/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-exports/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-exports/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-exports/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-exports/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
