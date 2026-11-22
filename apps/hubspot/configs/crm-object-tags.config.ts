import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Object%20Tags/Rollouts/320931/2026-09/objectTags.json',
  output: './src/crm-object-tags/routes.ts',
  template: {},
  type: { output: './src/crm-object-tags/types.ts' },
  client: { output: './src/crm-object-tags/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-object-tags/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-object-tags/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-object-tags/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-object-tags/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-object-tags/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-object-tags/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-object-tags/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-object-tags/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-object-tags/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
