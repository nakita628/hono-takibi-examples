import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Imports/Rollouts/144903/2026-09/imports.json',
  output: './src/crm-imports/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-imports/types.ts' },
  client: { output: './src/crm-imports/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-imports/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-imports/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-imports/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-imports/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-imports/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-imports/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-imports/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-imports/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-imports/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
