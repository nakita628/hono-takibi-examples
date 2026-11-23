import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Communication%20Preferences/Subscriptions/Rollouts/176901/2026-09/subscriptions.json',
  output: './src/communication-preferences-subscriptions/routes.ts',
  template: {},
  type: { output: './src/communication-preferences-subscriptions/types.ts' },
  client: { output: './src/communication-preferences-subscriptions/client.ts', baseUrl: '/' },
  rpc: { output: './src/communication-preferences-subscriptions/rpc.ts', parseResponse: true },
  swr: { output: './src/communication-preferences-subscriptions/hooks/swr.ts' },
  'tanstack-query': { output: './src/communication-preferences-subscriptions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/communication-preferences-subscriptions/hooks/preact-query.ts' },
  'solid-query': { output: './src/communication-preferences-subscriptions/hooks/solid-query.ts' },
  'vue-query': { output: './src/communication-preferences-subscriptions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/communication-preferences-subscriptions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/communication-preferences-subscriptions/hooks/angular-query.ts' },
  docs: {
    output: './src/communication-preferences-subscriptions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
