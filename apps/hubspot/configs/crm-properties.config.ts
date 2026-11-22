import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Properties/Rollouts/145899/2026-09/properties.json',
  output: './src/crm-properties/routes.ts',
  template: {},
  type: { output: './src/crm-properties/types.ts' },
  client: { output: './src/crm-properties/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-properties/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-properties/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-properties/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-properties/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-properties/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-properties/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-properties/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-properties/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-properties/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
