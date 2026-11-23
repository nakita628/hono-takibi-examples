import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Objects/Rollouts/424/2026-09/objects.json',
  output: './src/crm-objects/routes.ts',
  template: {},
  type: { output: './src/crm-objects/types.ts' },
  client: { output: './src/crm-objects/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-objects/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-objects/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-objects/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-objects/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-objects/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-objects/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-objects/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-objects/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-objects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
