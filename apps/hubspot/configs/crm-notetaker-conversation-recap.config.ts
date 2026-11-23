import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Notetaker%20Conversation%20Recap/Rollouts/321956/2026-09/notetakerConversationRecap.json',
  output: './src/crm-notetaker-conversation-recap/routes.ts',
  template: {},
  type: { output: './src/crm-notetaker-conversation-recap/types.ts' },
  client: { output: './src/crm-notetaker-conversation-recap/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-notetaker-conversation-recap/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-notetaker-conversation-recap/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-notetaker-conversation-recap/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-notetaker-conversation-recap/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-notetaker-conversation-recap/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-notetaker-conversation-recap/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-notetaker-conversation-recap/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-notetaker-conversation-recap/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-notetaker-conversation-recap/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
