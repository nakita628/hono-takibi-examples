import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Events/Events/Rollouts/147897/2026-09/events.json',
  output: './src/events-events/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/events-events/types.ts' },
  client: { output: './src/events-events/client.ts', baseUrl: '/' },
  rpc: { output: './src/events-events/rpc.ts', parseResponse: true },
  swr: { output: './src/events-events/hooks/swr.ts' },
  'tanstack-query': { output: './src/events-events/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/events-events/hooks/preact-query.ts' },
  'solid-query': { output: './src/events-events/hooks/solid-query.ts' },
  'vue-query': { output: './src/events-events/hooks/vue-query.ts' },
  'svelte-query': { output: './src/events-events/hooks/svelte-query.ts' },
  'angular-query': { output: './src/events-events/hooks/angular-query.ts' },
  docs: {
    output: './src/events-events/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
