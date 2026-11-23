import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Notes/Rollouts/321895/2026-09/notes.json',
  output: './src/crm-notes/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-notes/types.ts' },
  client: { output: './src/crm-notes/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-notes/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-notes/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-notes/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-notes/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-notes/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-notes/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-notes/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-notes/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-notes/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
