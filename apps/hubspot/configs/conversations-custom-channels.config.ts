import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Conversations/Custom%20Channels/Rollouts/160898/2026-09/customChannels.json',
  output: './src/conversations-custom-channels/routes.ts',
  template: {},
  type: { output: './src/conversations-custom-channels/types.ts' },
  client: { output: './src/conversations-custom-channels/client.ts', baseUrl: '/' },
  rpc: { output: './src/conversations-custom-channels/rpc.ts', parseResponse: true },
  swr: { output: './src/conversations-custom-channels/hooks/swr.ts' },
  'tanstack-query': { output: './src/conversations-custom-channels/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conversations-custom-channels/hooks/preact-query.ts' },
  'solid-query': { output: './src/conversations-custom-channels/hooks/solid-query.ts' },
  'vue-query': { output: './src/conversations-custom-channels/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conversations-custom-channels/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conversations-custom-channels/hooks/angular-query.ts' },
  docs: {
    output: './src/conversations-custom-channels/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
