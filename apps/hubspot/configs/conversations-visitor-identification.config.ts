import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Conversations/Visitor%20Identification/Rollouts/140938/2026-09/visitorIdentification.json',
  output: './src/conversations-visitor-identification/routes.ts',
  template: {},
  type: { output: './src/conversations-visitor-identification/types.ts' },
  client: { output: './src/conversations-visitor-identification/client.ts', baseUrl: '/' },
  rpc: { output: './src/conversations-visitor-identification/rpc.ts', parseResponse: true },
  swr: { output: './src/conversations-visitor-identification/hooks/swr.ts' },
  'tanstack-query': { output: './src/conversations-visitor-identification/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/conversations-visitor-identification/hooks/preact-query.ts' },
  'solid-query': { output: './src/conversations-visitor-identification/hooks/solid-query.ts' },
  'vue-query': { output: './src/conversations-visitor-identification/hooks/vue-query.ts' },
  'svelte-query': { output: './src/conversations-visitor-identification/hooks/svelte-query.ts' },
  'angular-query': { output: './src/conversations-visitor-identification/hooks/angular-query.ts' },
  docs: {
    output: './src/conversations-visitor-identification/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
