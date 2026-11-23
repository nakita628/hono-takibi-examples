import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Marketing/Marketing%20Events/Rollouts/129888/2026-09/marketingEvents.json',
  output: './src/marketing-marketing-events/routes.ts',
  template: {},
  type: { output: './src/marketing-marketing-events/types.ts' },
  client: { output: './src/marketing-marketing-events/client.ts', baseUrl: '/' },
  rpc: { output: './src/marketing-marketing-events/rpc.ts', parseResponse: true },
  swr: { output: './src/marketing-marketing-events/hooks/swr.ts' },
  'tanstack-query': { output: './src/marketing-marketing-events/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/marketing-marketing-events/hooks/preact-query.ts' },
  'solid-query': { output: './src/marketing-marketing-events/hooks/solid-query.ts' },
  'vue-query': { output: './src/marketing-marketing-events/hooks/vue-query.ts' },
  'svelte-query': { output: './src/marketing-marketing-events/hooks/svelte-query.ts' },
  'angular-query': { output: './src/marketing-marketing-events/hooks/angular-query.ts' },
  docs: {
    output: './src/marketing-marketing-events/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
