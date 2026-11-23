import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Associations%20Schema/Rollouts/130902/2026-09/associationsSchema.json',
  output: './src/crm-associations-schema/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-associations-schema/types.ts' },
  client: { output: './src/crm-associations-schema/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-associations-schema/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-associations-schema/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-associations-schema/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-associations-schema/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-associations-schema/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-associations-schema/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-associations-schema/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-associations-schema/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-associations-schema/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
