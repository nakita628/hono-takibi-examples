import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Conversations/Conversations/Rollouts/338925/2026-09/conversations.json',
  output: './src/conversations-conversations/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/conversations-conversations/types.ts' },
  client: { output: './src/conversations-conversations/client.ts', baseUrl: '/' },
  rpc: { output: './src/conversations-conversations/rpc.ts', parseResponse: true },
  swr: { output: './src/conversations-conversations/hooks/swr.ts' },
  'tanstack-query': { output: './src/conversations-conversations/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conversations-conversations/hooks/preact-query.ts' },
  'solid-query': { output: './src/conversations-conversations/hooks/solid-query.ts' },
  'vue-query': { output: './src/conversations-conversations/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conversations-conversations/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conversations-conversations/hooks/angular-query.ts' },
  docs: {
    output: './src/conversations-conversations/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
