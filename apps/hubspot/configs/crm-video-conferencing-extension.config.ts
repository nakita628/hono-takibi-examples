import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Video%20Conferencing%20Extension/Rollouts/148903/2026-09/videoConferencingExtension.json',
  output: './src/crm-video-conferencing-extension/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-video-conferencing-extension/types.ts' },
  client: { output: './src/crm-video-conferencing-extension/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-video-conferencing-extension/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-video-conferencing-extension/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-video-conferencing-extension/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-video-conferencing-extension/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-video-conferencing-extension/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-video-conferencing-extension/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-video-conferencing-extension/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-video-conferencing-extension/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-video-conferencing-extension/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
