import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Timeline/Rollouts/147898/2026-09/timeline.json',
  output: './src/crm-timeline/routes.ts',
  template: { routeHandler: true },
  type: { output: './src/crm-timeline/types.ts' },
  client: { output: './src/crm-timeline/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-timeline/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-timeline/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-timeline/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-timeline/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-timeline/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-timeline/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-timeline/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-timeline/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-timeline/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
