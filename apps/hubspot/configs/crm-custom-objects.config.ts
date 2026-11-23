import { defineConfig } from 'hono-takibi'

export default defineConfig({
  input: 'https://raw.githubusercontent.com/HubSpot/HubSpot-public-api-spec-collection/main/PublicApiSpecs/CRM/Custom%20Objects/Rollouts/424/2026-09/customObjects.json',
  output: './src/crm-custom-objects/routes.ts',
  template: {},
  type: { output: './src/crm-custom-objects/types.ts' },
  client: { output: './src/crm-custom-objects/client.ts', baseUrl: '/' },
  rpc: { output: './src/crm-custom-objects/rpc.ts', parseResponse: true },
  swr: { output: './src/crm-custom-objects/hooks/swr.ts' },
  'tanstack-query': { output: './src/crm-custom-objects/hooks/tanstack-query.ts' },
  'preact-query': { output: './src/crm-custom-objects/hooks/preact-query.ts' },
  'solid-query': { output: './src/crm-custom-objects/hooks/solid-query.ts' },
  'vue-query': { output: './src/crm-custom-objects/hooks/vue-query.ts' },
  'svelte-query': { output: './src/crm-custom-objects/hooks/svelte-query.ts' },
  'angular-query': { output: './src/crm-custom-objects/hooks/angular-query.ts' },
  docs: {
    output: './src/crm-custom-objects/api.md',
    curl: true,
    baseUrl: 'https://api.hubapi.com',
  },
})
