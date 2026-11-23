import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/Webhooks%20Journal/Webhooks%20Journal/Rollouts/284944/2026-09/webhooksJournal.json',
  output: './src/webhooks-journal-webhooks-journal/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/webhooks-journal-webhooks-journal/types.ts' },
  client: { output: './src/webhooks-journal-webhooks-journal/client.ts', baseUrl: '/' },
  rpc: { output: './src/webhooks-journal-webhooks-journal/rpc.ts', parseResponse: true },
  swr: { output: './src/webhooks-journal-webhooks-journal/hooks/swr.ts' },
  'tanstack-query': { output: './src/webhooks-journal-webhooks-journal/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/webhooks-journal-webhooks-journal/hooks/preact-query.ts' },
  'solid-query': { output: './src/webhooks-journal-webhooks-journal/hooks/solid-query.ts' },
  'vue-query': { output: './src/webhooks-journal-webhooks-journal/hooks/vue-query.ts' },
  'svelte-query': { output: './src/webhooks-journal-webhooks-journal/hooks/svelte-query.ts' },
  'angular-query': { output: './src/webhooks-journal-webhooks-journal/hooks/angular-query.ts' },
  docs: {
    output: './src/webhooks-journal-webhooks-journal/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
