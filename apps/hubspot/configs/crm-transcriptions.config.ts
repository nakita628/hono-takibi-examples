import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Transcriptions/Rollouts/178922/2026-09/transcriptions.json',
  output: './src/crm-transcriptions/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-transcriptions/types.ts' },
  client: { output: './src/crm-transcriptions/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-transcriptions/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-transcriptions/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-transcriptions/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-transcriptions/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-transcriptions/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-transcriptions/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-transcriptions/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-transcriptions/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-transcriptions/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
