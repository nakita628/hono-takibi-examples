import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Schemas/Rollouts/145900/2026-09/schemas.json',
  output: './src/crm-schemas/routes.ts',
  template: {},
  type: { output: './src/crm-schemas/types.ts' },
  client: { output: './src/crm-schemas/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-schemas/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-schemas/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-schemas/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-schemas/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-schemas/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-schemas/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-schemas/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-schemas/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-schemas/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
