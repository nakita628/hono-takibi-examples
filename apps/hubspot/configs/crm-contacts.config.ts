import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Contacts/Rollouts/321895/2026-09/contacts.json',
  output: './src/crm-contacts/routes.ts',
  template: {},
  type: { output: './src/crm-contacts/types.ts' },
  client: { output: './src/crm-contacts/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-contacts/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-contacts/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-contacts/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-contacts/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-contacts/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-contacts/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-contacts/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-contacts/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-contacts/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
