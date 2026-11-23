import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Events/Manage%20Event%20Definitions/Rollouts/138888/2026-09/manageEventDefinitions.json',
  output: './src/events-manage-event-definitions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/events-manage-event-definitions/types.ts' },
  client: { output: './src/events-manage-event-definitions/client.ts', baseUrl: '/' },
  rpc: { output: './src/events-manage-event-definitions/rpc.ts', parseResponse: true },
  swr: { output: './src/events-manage-event-definitions/hooks/swr.ts' },
  'tanstack-query': { output: './src/events-manage-event-definitions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/events-manage-event-definitions/hooks/preact-query.ts' },
  'solid-query': { output: './src/events-manage-event-definitions/hooks/solid-query.ts' },
  'vue-query': { output: './src/events-manage-event-definitions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/events-manage-event-definitions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/events-manage-event-definitions/hooks/angular-query.ts' },
  docs: {
    output: './src/events-manage-event-definitions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
