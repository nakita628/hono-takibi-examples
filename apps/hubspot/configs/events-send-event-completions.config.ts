import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Events/Send%20Event%20Completions/Rollouts/669/2026-09/sendEventCompletions.json',
  output: './src/events-send-event-completions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/events-send-event-completions/types.ts' },
  client: { output: './src/events-send-event-completions/client.ts', baseUrl: '/' },
  rpc: { output: './src/events-send-event-completions/rpc.ts', parseResponse: true },
  swr: { output: './src/events-send-event-completions/hooks/swr.ts' },
  'tanstack-query': { output: './src/events-send-event-completions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/events-send-event-completions/hooks/preact-query.ts' },
  'solid-query': { output: './src/events-send-event-completions/hooks/solid-query.ts' },
  'vue-query': { output: './src/events-send-event-completions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/events-send-event-completions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/events-send-event-completions/hooks/angular-query.ts' },
  docs: {
    output: './src/events-send-event-completions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
